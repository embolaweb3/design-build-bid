"use client";

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import ProjectCard from '../components/ProjectCard';
import BidForm from '../components/BidForm';
import DisputeForm from '../components/DisputeForm';
import deployedContracts from "~~/contracts/deployedContracts";
import PostProjectForm from '../components/PostProjectForm';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import PenalizeBidderForm from '../components/PenalizeBidderForm';
import ExtendDeadlineForm from '../components/ExtendDeadlineForm';


const contractABI = deployedContracts[11155111].DesignBuildBid.abi;
const contractAddress = deployedContracts[11155111].DesignBuildBid.address;

let wallet;
if (typeof window !== "undefined") {
  wallet = window.ethereum;
}

const Home = () => {
  const { address } = useAccount();
  const [projects, setProjects] = useState([]);
  const [retreivedProjects, setRetrievedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contract, setContract] = useState(null);
  const [showExtendDeadlineModal, setShowExtendDeadlineModal] = useState(false);

  useEffect(() => {
    if (!wallet) return;

    const provider = new ethers.providers.Web3Provider(wallet);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contract);
    fetchProjects();
  });

  useEffect(() => {
    apolloClient
      .query({ query: retreiveProjects })
      .then(res => {
        setRetrievedProjects(res.data.ProjectPosted);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const apolloClient = new ApolloClient({
    uri: "https://api.studio.thegraph.com/query/87090/design-build-bid/version/latest",
    cache: new InMemoryCache(),
  });

  const retreiveProjects = gql`
    query {
      ProjectPosted(first: 20) {
        projectId
        owner
        description
        budget
        deadline
      }
    }
  `;

  const fetchProjects = async () => {
    if (!contract) return;

    const projects = await contract.fetchProjects();
    setProjects(projects);
  };

  const submitBid = async (bidData) => {
    if (!contract || !selectedProject) return;

    try {
      const tx = await contract.submitBid(
        selectedProject.id,
        ethers.utils.parseEther(bidData.bidAmount),
        bidData.completionTime,
        bidData.milestones
      );
      await tx.wait();
      alert('Bid submitted successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error submitting bid:", error);
    }
  };

  const postProject = async (projectData) => {
    if (!contract) return;

    const { description, budget, deadline, milestones } = projectData;

    try {
      const tx = await contract.postProject(
        description,
        ethers.utils.parseEther(budget),
        Math.floor(new Date(deadline).getTime() / 1000),
        milestones.map(milestone => ethers.utils.parseEther(milestone))
      );
      await tx.wait();
      alert('Project posted successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error posting project:", error);
    }
  };

  const raiseDispute = async (disputeData) => {
    if (!contract || !selectedProject) return;

    try {
      const tx = await contract.raiseDispute(selectedProject.id, disputeData.reason);
      await tx.wait();
      alert('Dispute raised successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error raising dispute:", error);
    }
  };

  const withdrawUnspentFunds = async (projectId) => {
    if (!contract) return;

    try {
      const tx = await contract.withdrawUnspentFunds(projectId);
      await tx.wait();
      alert('Unspent funds withdrawn successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error withdrawing unspent funds:", error);
    }
  };

  const cancelProject = async (projectId) => {
    if (!contract) return;

    try {
      const tx = await contract.cancelProject(projectId);
      await tx.wait();
      alert('Project canceled successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error canceling project:", error);
    }
  };

  const updateProjectDetails = async (projectId, updatedData) => {
    if (!contract) return;

    try {
      const tx = await contract.updateProject(
        projectId,
        updatedData.description,
        ethers.utils.parseEther(updatedData.budget),
        Math.floor(new Date(updatedData.deadline).getTime() / 1000),
        updatedData.milestones.map(milestone => ethers.utils.parseEther(milestone))
      );
      await tx.wait();
      alert('Project updated successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error updating project details:", error);
    }
  };


  const extendDeadline = async (projectId, newDeadline) => {
    if (!contract) return;

    try {
      const tx = await contract.extendDeadline(projectId, newDeadline);
      await tx.wait();
      alert('Deadline extended successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error extending deadline:", error);
    }
  };

  const penalizeBidder = async (projectId) => {
    if (!contract) return;

    try {
      const tx = await contract.penalizeBidder(projectId);
      await tx.wait();
      alert('Bidder penalized successfully');
      fetchProjects();
    } catch (error) {
      console.error("Error penalizing bidder:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen">
      <main className="container mx-auto p-4 space-y-6">
        <PostProjectForm onSubmit={postProject} />
        <PenalizeBidderForm onSubmit={penalizeBidder} />


        {projects.map((project) => (
          <>
      <ProjectCard 
            key={project.id}
            project={project}
            contract={contract}
            onUpdate={fetchProjects}
            address={address}
            onUpdateProject={updateProjectDetails}
            onExtendDeadline={extendDeadline}
            onClick={() => setSelectedProject(project)}
          />
      </>
       
          
        ))}

        {selectedProject && (
          <BidForm onSubmit={submitBid} />
        )}

        {selectedProject && (
          <DisputeForm onSubmit={raiseDispute} />
        )}

        

        {selectedProject && (
          <button 
            type="button" 
            className="btn btn-warning mt-3"
            data-bs-toggle="modal" 
            data-bs-target="#penalizeBidderModal"
          >
            Penalize Bidder
          </button>
        )}

      </main>
    </div>
  );
};

export default Home;
