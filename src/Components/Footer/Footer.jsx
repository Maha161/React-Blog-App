import React from 'react'

export default function Footer(props) {
    let {theme} = props;
    

    return (
        <>
        <footer className={`py-3 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
            <div className="container text-center">
                <p>Simple Counter App using React useState</p>
            </div>
        </footer> 
        </>
    )
}
