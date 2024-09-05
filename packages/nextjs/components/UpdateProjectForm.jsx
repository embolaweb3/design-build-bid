import { useState } from 'react';
import {ethers} from 'ethers'

export default function UpdateProjectForm({ project, onSubmit }) {
  const [description, setDescription] = useState(project.description);
  const [budget, setBudget] = useState(ethers.utils.formatEther(project.budget));
  const [deadline, setDeadline] = useState(new Date(project.deadline * 1000).toISOString().slice(0, 10));
  const [milestones, setMilestones] = useState(project.milestones.map(m => ethers.utils.formatEther(m)));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, budget, deadline, milestones });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Budget (ETH):</label>
        <input value={budget} onChange={e => setBudget(e.target.value)} />
      </div>
      <div>
        <label>Deadline:</label>
        <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      </div>
      <div>
        <label>Milestones (ETH):</label>
        {milestones.map((milestone, index) => (
          <input
            key={index}
            value={milestone}
            onChange={e => {
              const updatedMilestones = [...milestones];
              updatedMilestones[index] = e.target.value;
              setMilestones(updatedMilestones);
            }}
          />
        ))}
      </div>
      <button type="submit">Update Project</button>
    </form>
  );
}
