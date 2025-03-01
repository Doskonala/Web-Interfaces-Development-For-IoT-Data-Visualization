import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Energy</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/energy">Energy consumption</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const Home = () => {
    return (
        <div className="container mt-4">
            <h1>Home page</h1>
            <p>Welcome to our energy website!</p>
        </div>
    );
};


const Energy = () => {
    return (
        <div className="container mt-4">
            <h1>Energy consumption</h1>
            <p>See data on energy consumption.</p>
        </div>
    );
};


const About = () => {
    return (
        <div className="container mt-4">
            <h1>About us</h1>
            <p>Details about the project.</p>
        </div>
    );
};


const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-4">
            <p>© 2025 All rights reserved.</p>
        </footer>
    );
};


const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/energy" element={<Energy />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;