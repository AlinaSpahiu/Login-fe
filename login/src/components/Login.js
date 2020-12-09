import React,{useState, useContext} from "react";
import UserContext from "../context/UserContext"
import { Form, Button, Container, Row } from "react-bootstrap";
import axios from "axios"
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const {setUserData} = useContext(UserContext)
    const history = useHistory()

    const submit = async(e) => {
        e.preventDefault()
        const loginUser = {email, password}
        const loginRes = await axios.post("http://localhost:5000/users/login", loginUser)
       
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        })
        localStorage.setItem("auth-token", loginRes.data.token)
        history.push("/")
        

    }
    return (
        <Container>
         <Row className="justify-content-center mt-5 mb-3"><h2> Login</h2></Row>  
         <Row className="justify-content-center mt-5 mb-3">
    <Form onSubmit={submit}>
     

      

      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email"
                      className="w-100" 
                      placeholder="Enter email" 
                      onChange={(e) =>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" 
                      className="w-100"
                      placeholder="Password" 
                      onChange={(e) =>setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="dark" className="w-100 mt-3" type="submit">
        Submit
      </Button>
    </Form>
    </Row>
    </Container>
    )
}

export default Login
