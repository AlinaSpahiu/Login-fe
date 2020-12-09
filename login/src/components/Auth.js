import React from 'react'
import { Button } from 'react-bootstrap'
import {useHistory} from "react-router-dom"


const Auth = () => {
    const history = useHistory();

    const register = () => history.push("/register")
    const login = () => history.push("/login")

    return (
        <div>
            <Button onClick={register}> Register </Button>
            <Button onClick={login}> Login </Button>
        </div>
    )
}

export default Auth
