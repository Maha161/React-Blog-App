import React from 'react';

export default function Counter(props) {
  let { incrementCount, resetCount, theme } = props;
  return (
    <>
      <div className="text-center mb-4">
        <button 
          className={`btn btn-lg ${theme === 'dark' ? 'btn-primary' : 'btn-success'} me-3`}
          onClick={incrementCount}
        >
          <i className="fas fa-plus-circle me-1 fs-5"></i>
          Increment 
        </button>
        <button 
          className={`btn btn-lg ${theme === 'dark' ? 'btn-secondary' : 'btn-warning'}`}
          onClick={resetCount}
        >
          <i className="fas fa-sync-alt me-1 fs-6"></i>
          Reset
        </button>
      </div>
    </>
  );
}
