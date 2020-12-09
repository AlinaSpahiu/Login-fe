import React, {useEffect, useContext} from 'react'
import { Row } from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import UserContext from "../context/UserContext"

const Home = () => {
    const {userData} = useContext(UserContext)
    const history = useHistory()
    useEffect(()=>{
        if(!userData.user) history.push("/login")
    },)
    return (
        <Row className="justify-content-center mt-5 mb-5">
           <h1> Welcome </h1> 
        </Row>
    )
}

export default Home
