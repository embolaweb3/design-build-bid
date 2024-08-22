import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BidForm({ onSubmit }) {
  const [bidAmount, setBidAmount] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [milestones, setMilestones] = useState([]);

  const handleSubmit = () => {
    onSubmit({ bidAmount, completionTime, milestones });
  };

  return (
    <div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-black bg-opacity-60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Submit a Bid</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Bid Amount (ETH)</label>
        <input
          type="text"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="mt-1 p-3 border rounded w-full bg-white bg-opacity-50 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Completion Time (days)</label>
        <input
          type="text"
          value={completionTime}
          onChange={(e) => setCompletionTime(e.target.value)}
          className="mt-1 p-3 border rounded w-full bg-white bg-opacity-50 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Implement milestone fields */}
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        onClick={handleSubmit} 
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow"
      >
        Submit
      </motion.button>
    </div>
  );
}
