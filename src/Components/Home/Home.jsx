import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Counter from '../Counter/Counter'
import Display from '../Display/Display'
import Footer from '../Footer/Footer'

export default function Home() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const incrementCount = () => setCount(count => count + 1);
  const resetCount = () => setCount(0);
  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'} min-vh-100`}>
      <Navbar theme={theme} toggleTheme={changeTheme} />
      <div className="container py-5">
        <Counter incrementCount={incrementCount} resetCount={resetCount} theme={theme} />
        <Display count={count} theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}
