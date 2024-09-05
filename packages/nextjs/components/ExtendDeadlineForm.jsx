import { useState } from 'react';

export default function ExtendDeadlineForm({ onSubmit, onClose,projectId }) {
  const [newDeadline, setNewDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newDeadline) {
      console.error('No deadline selected');
      return;
    }

    // Convert the date string to a Unix timestamp in seconds
    const deadlineInSeconds = Math.floor(new Date(newDeadline).getTime() / 1000);

    if (isNaN(deadlineInSeconds)) {
      console.error('Invalid date format');
      return;
    }


    onSubmit(projectId,deadlineInSeconds);  // Pass the timestamp instead of the date string
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Extend Deadline</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">New Deadline:</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newDeadline}
              onChange={(e) => setNewDeadline(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Extend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
