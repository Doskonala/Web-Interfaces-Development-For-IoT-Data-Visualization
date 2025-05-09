import React, { useEffect, useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import localforage from "localforage";
import Login from "../components/Login";

const Home = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    localforage.getItem("currentUser").then(setUser);
  }, []);

  const handleLogout = async () => {
    await localforage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <Container className="mt-4 text-center">
      <h1>Welcome to Info Solar</h1>
      <p>Monitor and analyze the latest information on energy generation by solar panels.</p>

      {user ? (
        <>
          <Alert variant="success">Logged in as <strong>{user.name}</strong> ({user.role})</Alert>
          <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Button variant="primary" onClick={() => setShowLogin(!showLogin)}>Login</Button>
          {showLogin && <Login />}
        </>
      )}
    </Container>
  );
};

export default Home;
