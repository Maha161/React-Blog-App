import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function AuthorInfo() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  const sampleAuthors = [
    { id: 101, name: 'Maha Ibrahim', bio: 'Senior React Developer with 5 years of experience', posts: 24 },
    { id: 102, name: 'Ahmed Khaled', bio: 'Frontend Architect and React enthusiast', posts: 42 },
    { id: 103, name: 'Sarah Adel', bio: 'UI/UX Designer who loves React', posts: 15 },
    { id: 104, name: 'Mona Saeed', bio: 'Full-stack developer specializing in React and Node', posts: 31 },
    { id: 105, name: 'Youssef Nabil', bio: 'React trainer and open-source contributor', posts: 18 },
  ];

  useEffect(() => {
    const authorIdMap = {
      1: 101,
      2: 102,
      3: 103,
      4: 104,
      5: 105
    };
    
    const authorId = authorIdMap[id];
    if (authorId) {
      const authorData = sampleAuthors.find(author => author.id === authorId);
      setAuthor(authorData);
    }
  }, [id]);

  if (!author) {
    return (
      <div className="alert alert-warning">
        Author information not available. <Link to={`/post/${id}`}>Back to post</Link>
      </div>
    );
  }

  return (
    <>
    <div className="author-card bg-light p-4 rounded-3 shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <div className="avatar bg-dark text-white rounded-circle me-3 d-flex align-items-center justify-content-center" 
          style={{ width: '60px', height: '60px' }}>
          {author.name.charAt(0)}
        </div>
        <div>
          <h3 className="h5 mb-0">{author.name}</h3>
          <span className="text-muted small">Author</span>
        </div>
      </div>
      
      <p className="text-secondary mb-3">{author.bio}</p>
      
      <div className="d-flex justify-content-between border-top pt-3">
        <div>
          <span className="text-muted small">Total Posts</span>
          <h4 className="h5 mb-0">{author.posts}</h4>
        </div>
        <Link 
          to={`/post/${id}`} 
          className="btn btn-outline-dark btn-sm align-self-center"
        >
          <i className="bi bi-arrow-left me-1"></i> Back to Post
        </Link>
      </div>
    </div>
    </>
   
  );
}