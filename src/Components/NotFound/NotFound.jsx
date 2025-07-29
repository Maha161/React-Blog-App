import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="container my-5 text-center">
      <div className="card bg-danger text-white">
        <div className="card-body">
          <h1 className="card-title">404 - Page Not Found</h1>
          <p className="card-text">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button 
            className="btn btn-light" 
            onClick={() => navigate('/')}
          >
            Go Home Now
          </button>
        </div>
      </div>
    </div>
  );
}