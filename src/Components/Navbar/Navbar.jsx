import React from 'react'

export default function Navbar(props) {
    let {theme, toggleTheme } = props;
    
    return (
        <>
        <nav className={`navbar ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container">
                <h1 className="py-2 fs-4">Counter App</h1>
                <button 
                    className={`btn btn-sm ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
                    onClick={toggleTheme}
                >
                {theme === 'dark' ? ( <> <i className="fas fa-moon me-1"></i> Light Mode </>) : ( <> <i className="fas fa-sun me-1"></i> Dark Mode</> )}

                </button>
            </div>
        </nav> 
        </>
    )
}
