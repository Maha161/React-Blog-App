import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container">
                <Link className="navbar-brand fw-light fs-3" to="/">
                    <span className="text-primary">React</span>Blog
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <NavLink 
                                className="nav-link px-3 py-2 rounded-3" 
                                to={'/'}                           >
                               <i className="fas fa-home me-1"></i> Home
                            </NavLink>
                        </li>
                        
                        <li className="nav-item mx-1">
                            <NavLink 
                                className="nav-link px-3 py-2 rounded-3" 
                                to={'/about'}                           >
                                <i className="fas fa-info-circle me-1"></i> About
                            </NavLink>
                        </li>
                        
                        <li className="nav-item mx-1">
                            <NavLink 
                                className="nav-link px-3 py-2 rounded-3" 
                                to={'/stats'}                           >
                                <i className="fas fa-chart-line me-1"></i> Stats
                            </NavLink>
                        </li>
                    </ul>
                    
                    <div className="d-flex align-items-center">
                        <div className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle d-flex align-items-center" 
                                href="#" 
                                id="accountDropdown"
                                role="button" 
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                   <i className="fas fa-user-circle me-1 fs-4"></i>
                                <span className="d-none d-lg-inline">Account</span>
                            </a>
                            <ul 
                                className="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2" 
                                aria-labelledby="accountDropdown">
                                <li>
                                    <Link className="dropdown-item py-2" to="#">
                                        <i className="fas fa-sign-in-alt me-2 text-muted"></i> Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" to="#">
                                        <i className="fas fa-user-plus me-2 text-muted"></i> Register
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider my-1" /></li>
                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}