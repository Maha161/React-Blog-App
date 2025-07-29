import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const { title, date, excerpt, id, author } = post;
  
  return (
    <>
    <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
      <div className="card-body d-flex flex-column">
        <div className="mb-3">
          <span className="badge bg-light text-dark mb-2">Latest</span>
          <h5 className="card-title fw-normal">{title}</h5>
          <h6 className="card-subtitle text-muted small mb-3">
            By {author} • {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </h6>
          <p className="card-text text-secondary">{excerpt}</p>
        </div>
        <div className="mt-auto">
          <Link 
            to={`/post/${id}`} 
            className="btn btn-outline-dark btn-sm stretched-link"
          >
            Read More <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}