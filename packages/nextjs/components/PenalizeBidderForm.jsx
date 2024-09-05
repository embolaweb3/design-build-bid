import { useState } from 'react';

export default function PenalizeBidderForm({ onSubmit }) {
  const [penaltyReason, setPenaltyReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ penaltyReason });
  };

  return (
    <div className="modal fade" id="penalizeBidderModal" tabIndex="-1" aria-labelledby="penalizeBidderModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="penalizeBidderModalLabel">Penalize Bidder</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="penaltyReason" className="form-label">Reason for Penalty</label>
                <input
                  type="text"
                  className="form-control"
                  id="penaltyReason"
                  value={penaltyReason}
                  onChange={(e) => setPenaltyReason(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
