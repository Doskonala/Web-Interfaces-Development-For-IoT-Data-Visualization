import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import localforage from "localforage";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const users = await localforage.getItem("users") || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      await localforage.setItem("currentUser", user);
      setError("");
      if (onLoginSuccess) onLoginSuccess(user);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Container className="mt-3">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
