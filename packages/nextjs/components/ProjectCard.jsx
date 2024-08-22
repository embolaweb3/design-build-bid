import { useState } from 'react';
import { ethers} from 'ethers'
import { motion } from 'framer-motion';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const formattedMilestones = project.milestones.map((milestone) => ethers.utils.formatEther(milestone));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-6 rounded-xl shadow-xl mb-6 bg-black bg-opacity-30 backdrop-blur-lg"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{project.description}</h2>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ rotate: isOpen ? 180 : 0 }}
          className="focus:outline-none"
        >
          <ChevronDownIcon className={`w-8 h-8 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: 'auto' }} 
          transition={{ duration: 0.5 }}
          className="mt-4 overflow-hidden"
        >
          <p><strong>Budget:</strong> {ethers.utils.formatEther(project.budget)} ETH</p>
          <p><strong>Deadline:</strong> {new Date(project.deadline * 1000).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {project.active ? 'Active' : 'Closed'}</p>
          <p><strong>Milestones:</strong> {project.active ? 'Active' : 'Closed'}</p>
          <p><strong>Selected Bidder:</strong> {project.selectedBidder !== ethers.constants.AddressZero ? selectedBidder : 'None'}</p>
          <p><strong>Dispute Raised:</strong> {project.disputeRaised ? 'Yes' : 'No'}</p>
          <div>
            <strong>Milestones:</strong>
            <ul className="list-disc list-inside">
              {formattedMilestones.map((milestone, index) => (
                <li key={index}>
                  {milestone} ETH - {project.milestonePaid[index] ? 'Paid' : 'Pending'}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
