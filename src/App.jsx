import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">React + Router</Link>
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
                            <Link className="nav-link" to="/">Головна</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/energy">Споживання енергії</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Про користувача</Link>
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
            <h1>Головна сторінка</h1>
            <p>Вітаємо на нашому сайті!</p>
        </div>
    );
};


const Energy = () => {
    return (
        <div className="container mt-4">
            <h1>Споживання енергії</h1>
            <p>Тут відображається інформація про споживання енергії.</p>
        </div>
    );
};


const About = () => {
    return (
        <div className="container mt-4">
            <h1>Про користувача</h1>
            <p>Детальна інформація про користувача.</p>
        </div>
    );
};


const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-4">
            <p>© 2025 Всі права захищені</p>
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