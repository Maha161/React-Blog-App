import React, { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const samplePosts = [
    {
      id: 1,
      title: 'How to Learn React',
      author: 'Maha Ibrahim',
      date: '2025-07-25',
      content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
      authorId: 101
    },
    {
      id: 2,
      title: 'Understanding useEffect',
      author: 'Ahmed Khaled',
      date: '2025-07-20',
      content: 'The useEffect Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.',
      authorId: 102
    },
    {
      id: 3,
      title: 'Styling in React',
      author: 'Sarah Adel',
      date: '2025-07-18',
      content: 'There are many ways to style React components. The most common are: CSS Stylesheets, Inline styling, CSS Modules, and CSS-in-JS libraries like styled-components. Each has its own advantages and use cases.',
      authorId: 103
    },
    {
      id: 4,
      title: 'Using React Router',
      author: 'Mona Saeed',
      date: '2025-07-22',
      content: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.',
      authorId: 104
    },
    {
      id: 5,
      title: 'React with Bootstrap',
      author: 'Youssef Nabil',
      date: '2025-07-27',
      content: 'Bootstrap can be easily integrated with React using packages like react-bootstrap or by simply including the Bootstrap CSS. This allows you to create responsive designs quickly while using React components.',
      authorId: 105
    },
  ];

  useEffect(() => {
    const foundPost = samplePosts.find(post => post.id === parseInt(id));
    setPost(foundPost);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center my-5">Loading post details...</div>;
  }

  if (!post) {
    return (
      <div className="alert alert-danger text-center">
        Post not found! <Link to="/">Return to home</Link>
      </div>
    );
  }

   return (
    <>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <article className="mb-5">
            <header className="mb-4">
              <h1 className="fw-light display-5 mb-3">{post.title}</h1>
              <div className="d-flex align-items-center text-muted small">
                <span className="me-3">By {post.author}</span>
                <span>•</span>
                <span className="ms-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </header>
            
            <div className="article-content lead text-secondary mb-4">
              {post.content}
            </div>
            
            <Link 
              to={`authorInfo`} 
              className="btn btn-dark px-4 py-2"
            >
              <i className="bi bi-person me-2"></i> View Author Profile
            </Link>
          </article>

          <div className="my-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
