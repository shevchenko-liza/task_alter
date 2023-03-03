import React, { useEffect, useRef, useState } from "react";

import { Box, Button, InputLabel } from "@mui/material";
import { Container } from "@mui/system";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";

export const User = () => {
    const name = useRef() as React.MutableRefObject<HTMLInputElement>
    const email = useRef() as React.MutableRefObject<HTMLInputElement>
    const password = useRef() as React.MutableRefObject<HTMLInputElement>
    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignIn = localStorage.getItem("signIn")
    const localPassword = localStorage.getItem("password")
    const localName = localStorage.getItem("name")
    const { t } = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localSignIn) {
            setShowHome(true)
        }
        if (!localName) {
            setShow(true)
        }
    })

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("name", name.current.value)
            alert("Account created successfully!")
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (name.current.value == localName && password.current.value == localPassword) {
            localStorage.setItem("signIn", name.current.value)
            navigate('/profile')
            window.location.reload()
        } else {
            alert("UserName or Password entered incorrectly")
        }
    }

    const logout = () => {
        localStorage.removeItem("signIn")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <Container style={{ marginTop: '200px' }}>
            {show ?
                <Box style={{ display: 'grid', margin: 'auto', width: '300px', gap: '22px' }}>
                    <InputLabel size='small' style={{ color: 'black' }}>{t('form.name')}</InputLabel>
                    <input style={{ height: '25px' }} placeholder="UserName" type='text' ref={name} />
                    <InputLabel size='small' style={{ color: 'black' }}>{t('form.email')}</InputLabel>
                    <input style={{ height: '25px' }} placeholder="Email" type='text' ref={email} />
                    <InputLabel size='small' style={{ color: 'black' }}>{t('form.password')}</InputLabel>
                    <input style={{ height: '25px' }} placeholder="Password" type='password' ref={password} />
                    <Button variant="text" onClick={handleClick}>{t('buttons.button')}</Button>
                </Box>
                :
                <Box style={{ display: 'grid', margin: 'auto', width: '300px', gap: '22px' }}>
                    <InputLabel size='small' style={{ color: 'black' }}>{t('form.name')}</InputLabel>
                    <input style={{ height: '25px' }} placeholder="UserName" type='text' ref={name} />
                    <InputLabel size='small' style={{ color: 'black' }}>{t('form.password')}</InputLabel>
                    <input style={{ height: '25px' }} placeholder="Password" type='password' ref={password} />
                    <Button variant="text" onClick={handleSignIn}>{t('buttons.signIn')}</Button>
                    <Button variant="text" onClick={logout} className="logout">{t('buttons.logOut')}</Button>
                    <Button variant="text" onClick={deleteAccount} className="delete">{t('buttons.delete')}</Button>
                </Box>
            }
        </Container>
    );
}