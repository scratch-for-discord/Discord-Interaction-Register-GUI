import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import About from './components/Sections/About';
import Footer from './components/Sections/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Element from './components/Login/Login'
const root = ReactDOM.createRoot(document.getElementById('root'));
function MainElement() {
  return <>
    <Navbar needLogin={true} />
    <Logo />
    <About />
    <Footer />
  </>
}
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainElement />}></Route>
        <Route path={'/login'} element={<Element/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);




