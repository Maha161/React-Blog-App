import { useState } from "react";


export default function Stats() {
  const [stats] = useState({
    posts: 125,
    authors: 15,
    views: 5428
  });

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-light display-5 mb-3">Blog Statistics</h1>
        <p className="lead text-muted">
          Numbers that tell our story
        </p>
      </div>
      
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-file-earmark-text fs-1"></i>
              </div>
              <h2 className="fw-light mb-2">{stats.posts}</h2>
              <p className="text-uppercase small text-muted mb-0">Total Posts</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-people fs-1"></i>
              </div>
              <h2 className="fw-light mb-2">{stats.authors}</h2>
              <p className="text-uppercase small text-muted mb-0">Authors</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-eye fs-1"></i>
              </div>
              <h2 className="fw-light mb-2">{stats.views.toLocaleString()}</h2>
              <p className="text-uppercase small text-muted mb-0">Total Views</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h4 className="h5 mb-4 text-uppercase fw-normal text-muted">Content Distribution</h4>
          
          <div className="mb-3">
            <div className="d-flex justify-content-between mb-2">
              <span>React Posts</span>
              <span>75%</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="d-flex justify-content-between mb-2">
              <span>JavaScript Posts</span>
              <span>15%</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div 
                className="progress-bar bg-info" 
                role="progressbar" 
                style={{ width: '15%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-0">
            <div className="d-flex justify-content-between mb-2">
              <span>Other Topics</span>
              <span>10%</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div 
                className="progress-bar bg-secondary" 
                role="progressbar" 
                style={{ width: '10%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}