import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');

 const initialPosts = [
    {
      id: 1,
      title: 'How to Learn React',
      author: 'Maha Ibrahim',
      date: '2025-07-25',
      excerpt: 'React is a JavaScript library for building user interfaces...',
    },
    {
      id: 2,
      title: 'Understanding useEffect',
      author: 'Ahmed Khaled',
      date: '2025-07-20',
      excerpt: 'useEffect lets you perform side effects in function components...',
    },
    {
      id: 3,
      title: 'Styling in React',
      author: 'Sarah Adel',
      date: '2025-07-18',
      excerpt: 'You can style React components using CSS, inline styles...',
    },
    {
      id: 4,
      title: 'Using React Router',
      author: 'Mona Saeed',
      date: '2025-07-22',
      excerpt: 'React Router helps in creating single-page applications...',
    },
    {
      id: 5,
      title: 'React with Bootstrap',
      author: 'Youssef Nabil',
      date: '2025-07-27',
      excerpt: 'Bootstrap can be easily integrated with React for responsive design...',
    },
  ];

  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  return (
    <>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-light mb-4">📰 Our Blog</h1>
        <div className="position-relative w-50 mx-auto">
          <input
            type="text"
            className="form-control px-4 py-2 border-1 border-light shadow-sm"
            placeholder="Search posts..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              borderRadius: '2rem',
              backgroundColor: 'rgba(255,255,255,0.9)'
            }}
          />
          <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
        </div>
      </div>

      <div className="row g-4">
        {posts
          .filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
          .map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
    </div>
    </>
  );
}