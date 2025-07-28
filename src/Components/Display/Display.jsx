import React from 'react'

export default function Display(props) {
    let { count, theme } = props;
    
    return (
        <>
        <div className={`text-center p-4 ${theme === 'dark' ? 'bg-secondary' : 'bg-white'} rounded`}>
            <h2>Current Count:</h2>
            <h1 className={`display-1 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                {count}
            </h1>
        </div>         
        </>
    )
}
