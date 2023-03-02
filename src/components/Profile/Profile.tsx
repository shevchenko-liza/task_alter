import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

export const Profile = () => {
    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignIn = localStorage.getItem("signIn")
    const localName = localStorage.getItem("name")
    const { t } = useTranslation()
 
    useEffect(() => {
        if (!localSignIn) {
            setShowHome(true)
        }  if (!localName) {
            setShow(true)
        }
    })

    return (
        <div  >
            {showHome ?
                <Navigate to="/" />
                :
                <Container sx={{ maxWidth: '1200px', marginTop: '130px' }}>
                    <Typography variant="subtitle2" fontSize="30px" margin='auto'  >The most popular programming languages:</Typography>
                    <Box marginTop='20px'>
                        <Typography variant="h6">1) C++ </Typography>
                        <Typography variant='body1'>{t('profile.c++.text')}</Typography>
                    </Box>
                    <Box marginTop='30px'>
                        <Typography variant="h6">2) C#</Typography>
                        <Typography variant='body1'> {t('profile.c#.text')}</Typography>
                    </Box>
                    <Box marginTop='30px'>
                        <Typography variant="h6">3) Java</Typography>
                        <Typography variant='body1'>{t('profile.java.text')}</Typography>
                    </Box>
                    <Box marginTop='30px'>
                        <Typography variant="h6">4) JavaScript</Typography>
                        <Typography variant='body1'>{t('profile.javaScript.text')}</Typography>
                    </Box>
                    <Box marginTop='30px'>
                        <Typography variant="h6">5) Python</Typography>
                        <Typography variant='body1'>{t('profile.python.text')}</Typography>
                    </Box>

                    <Box marginTop='30px'>
                        <Typography variant="h6">6) PHP</Typography>
                        <Typography variant='body1'>{t('profile.php.text')}</Typography>
                    </Box>
                    <Box marginTop='30px'>
                        <Typography variant="h6">7) Go </Typography>
                        <Typography variant='body1'>{t('profile.go.text')}</Typography>
                    </Box>
                </Container>
            }
        </div>
    );
}