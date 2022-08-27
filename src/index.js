import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import About from './components/Sections/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Logo />
    <About />
  </React.StrictMode>
);




