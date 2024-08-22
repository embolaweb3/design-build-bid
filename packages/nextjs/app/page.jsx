"use client"

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import ProjectCard from '../components/ProjectCard'
import BidForm from '../components/BidForm';
import DisputeForm from '../components/DisputeForm';
import deployedContracts from "~~/contracts/deployedContracts";
import PostProjectForm from '../components/PostProjectForm';

const contractABI = deployedContracts[11155111].DesignBuildBid.abi;
const contractAddress = deployedContracts[11155111].DesignBuildBid.address;

let wallet
if (typeof window !== "undefined") {
  wallet = window.ethereum; 
}


const Home =()=> {
  const { address } = useAccount();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contract, setContract] = useState(null)

 
  useEffect(() => {
    if(!wallet) return

    const provider = new ethers.providers.Web3Provider(wallet); 
    const signer = provider.getSigner(); 
    const contract = new ethers.Contract(contractAddress, contractABI, signer); 
    console.log(contract)
    setContract(contract)
    // fetchProjects();

  }, []);

  const fetchProjects = async () => {
    if(!contract) return

    const projects = await contract.fetchProjects();
    console.log(projects)
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
      fetchProjects(); // Refresh projects to update state
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
        Math.floor(new Date(deadline).getTime() / 1000), // Convert deadline to Unix timestamp
        milestones.map(milestone => ethers.utils.parseEther(milestone)) // Convert milestones to wei
      );
      await tx.wait();
      alert('Project posted successfully');
      fetchProjects(); // Refresh projects to include the newly posted project
    } catch (error) {
      console.error("Error posting project:", error);
    }
  };

  const raiseDispute = async (disputeData) => {
    // Implement dispute raising logic
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen">
      <main className="container mx-auto p-4 space-y-6">
      <PostProjectForm onSubmit={postProject} />

        {projects?.map((project) => (
          <ProjectCard 
          key={project.id}
           project={project}
           onClick={() => setSelectedProject(project)}
           />
        ))}

        {selectedProject && (
          <BidForm onSubmit={submitBid} />
        )}

        {selectedProject && (
          <DisputeForm onSubmit={raiseDispute} />
        )}
      </main>
    </div>
  );
}

export default Home