import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DisputeForm({ onSubmit }) {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    onSubmit({ reason });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-red-500 bg-opacity-60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Raise a Dispute</h3>
      <div className="mb-4">
        <label className="block text-white">Reason</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="mt-1 p-3 border rounded w-full bg-white bg-opacity-50 focus:ring-2 focus:ring-red-400"
        />
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        onClick={handleSubmit} 
        className="bg-red-700 text-white px-4 py-2 rounded-lg shadow"
      >
        Raise Dispute
      </motion.button>
    </motion.div>
  );
}
