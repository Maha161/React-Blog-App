import React from 'react';

export default function Footer() {
    return (
        <>
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <p className="mb-1">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <p className="mb-0">
                    <a href="https://github.com" className="text-white text-decoration-none me-3">
                        <i className="fab fa-github me-1"></i> GitHub
                    </a>
                    <a href="mmmm@example.com" className="text-white text-decoration-none">
                        <i className="fas fa-envelope me-1"></i> Contact Us
                    </a>
                </p>
            </div>
        </footer>
        </>    
    );
}
