import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Visualisation from "./pages/Visualisation";
import Login from "./components/Login";
import { initializeData } from "./utils/userData";

function App() {
  useEffect(() => {
    initializeData();
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualisation" element={<Visualisation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
