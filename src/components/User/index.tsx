import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

// interface Data {
//     name: string;
//     email: string;
//     password: string | number
//     value: ""
// }

export const User = () => {
    const name = useRef() as React.MutableRefObject<HTMLInputElement>
    const email = useRef() as React.MutableRefObject<HTMLInputElement>
    const password = useRef() as React.MutableRefObject<HTMLInputElement>
    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    const localName = localStorage.getItem("name")

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
    })

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", email.current.value)
            alert("Account created successfully!!")
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (email.current.value == localEmail && password.current.value == localPassword) {
            localStorage.setItem("signUp", email.current.value)
            window.location.reload()
        } else {
            alert("Please Enter valid Credential")
        }
    }

    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <Container style={{ marginTop: '200px' }}>
            {showHome ?
                <Box style={{ display: 'grid', margin: 'auto', width: '300px' }}>
                    <input placeholder="Email" type='text' ref={email} />
                    <input placeholder="Password" type='password' ref={password} />
                    <Button variant="text" onClick={handleSignIn}>Sign In</Button>
                    <Button variant="text" onClick={logout} className="logout">LogOut</Button>

                    <Button variant="text" onClick={deleteAccount} className="delete">Delete</Button>
                </Box>
                :
                <Box style={{ display: 'grid', margin: 'auto', width: '300px' }}>
                    <input placeholder="Name" type='text' ref={name} />
                    <input placeholder="Email" type='text' ref={email} />
                    <input placeholder="Password" type='password' ref={password} />
                    <Button variant="text" onClick={handleClick}>Sign Up</Button>
                </Box>}
        </Container>
    );
}