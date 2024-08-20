import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, useContract } from 'wagmi';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedProjectCard from '../components/EnhancedProjectCard';
import EnhancedBidForm from '../components/EnhancedBidForm';
import EnhancedDisputeForm from '../components/EnhancedDisputeForm';

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
  // Add the ABI here
];

export default function Home() {
  const { address } = useAccount();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
  });

  useEffect(() => {
    if (contract) {
      fetchProjects();
    }
  }, [contract]);

  const fetchProjects = async () => {
    const projectCount = await contract.projectCount();
    let projectArray = [];
    for (let i = 1; i <= projectCount; i++) {
      const project = await contract.projects(i);
      projectArray.push(project);
    }
    setProjects(projectArray);
  };

  const submitBid = async (bidData) => {
    // Implement bid submission logic
  };

  const raiseDispute = async (disputeData) => {
    // Implement dispute raising logic
  };

  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen">
      <EnhancedHeader />
      <main className="container mx-auto p-4 space-y-6">
        {projects.map((project) => (
          <EnhancedProjectCard key={project.id} project={project} />
        ))}

        {selectedProject && (
          <EnhancedBidForm onSubmit={submitBid} />
        )}

        {selectedProject && (
          <EnhancedDisputeForm onSubmit={raiseDispute} />
        )}
      </main>
    </div>
  );
}
