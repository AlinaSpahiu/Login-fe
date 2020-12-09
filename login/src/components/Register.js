import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Form, Button, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { email, password, name, username };
    await axios.post("http://localhost:5000/users/register", newUser);
    const loginRes = await axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <Container>
     <Row className="justify-content-center mt-5 mb-3"><h2> Register</h2></Row> 
      <Row className="justify-content-center">
      <Form onSubmit={submit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            className="w-100"
            type="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            className="w-100"
            type="username"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            className="w-100"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            className="w-100"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="dark" className="w-100 mt-4" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
    </Container>
  );
};

export default Register;
