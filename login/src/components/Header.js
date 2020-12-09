import React, {useContext} from "react";
import {Navbar, Nav, Form, Button, Container} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import UserContext from "../context/UserContext"

const Header = () => {
  const {userData, setUserData} = useContext(UserContext)
  const history = useHistory();

  const home = () => history.push("/")
  const register = () => history.push("/register")
  const login = () => history.push("/login")
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "")
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home">LoginApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Button variant="dark" onClick={home} className="mr-2">Home</Button>
          { 
           userData.user ? <Button onClick={logout}>Log out</Button>
           : (<>
             
              <Button variant="dark" onClick={login} className="mr-2">Login</Button>
             <Button variant="dark" onClick={register} className="mr-2">Register</Button>
             </>
          )
          }
          
        </Nav>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
