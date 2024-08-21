"use client"

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import ProjectCard from '../components/ProjectCard'
import BidForm from '../components/BidForm';
import DisputeForm from '../components/DisputeForm';
import deployedContracts from "~~/contracts/deployedContracts";

const contractABI = deployedContracts[11155111].DesignBuildBid.abi;
const contractAddress = deployedContracts[11155111].DesignBuildBid.address;

let wallet
if (typeof window !== "undefined") {
  wallet = window.ethereum; 
}


export default function Home() {
  const { address } = useAccount();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contract, setContract] = useState(null)

 
  useEffect(() => {
    if(!wallet) return

    const provider = new ethers.BrowserProvider(wallet); 
    const signer = provider.getSigner(); 
    const contract = new ethers.Contract(contractAddress, contractABI, signer); 
    setContract(contract)
    fetchProjects();

  }, [contract]);

  const fetchProjects = async () => {
    if(!contract) return

    const projects = await contract.fetchProjects();
    console.log(projects)
    setProjects(projects);
  };

  const submitBid = async (bidData) => {
    // Implement bid submission logic
  };

  const raiseDispute = async (disputeData) => {
    // Implement dispute raising logic
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen">
      <main className="container mx-auto p-4 space-y-6">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
