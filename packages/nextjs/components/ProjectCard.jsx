import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/outline';

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-6 rounded-xl shadow-xl mb-6 bg-white bg-opacity-30 backdrop-blur-lg"
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
          <p><strong>Budget:</strong> {project.budget} ETH</p>
          <p><strong>Deadline:</strong> {new Date(project.deadline * 1000).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {project.active ? 'Active' : 'Closed'}</p>
          {/* more project details here */}
        </motion.div>
      )}
    </motion.div>
  );
}
