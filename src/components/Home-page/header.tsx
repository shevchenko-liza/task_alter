import { useState } from "react";

import { Link } from "react-router-dom";

import { AppBar, Box, Button, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import i18next from "i18next";

const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
};

export const Header = () => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()

    const theme = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: 'body2'
                        },
                        style: {
                            fontSize: 25
                        }
                    }
                ]
            }
        }
    })
    return (
        <AppBar >
            <ThemeProvider theme={theme}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#778899', height: '80px' }} >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/"}>
                        <Typography variant="body2" >
                            {t('home.name')}
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/news"}>
                        <Typography variant="body2" >
                            {t('menu.news')}
                        </Typography>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/profile"}>
                        <Typography variant="body2" >
                            {t('menu.profile')}
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/user"}>
                        <img src="photo/ic3.jpg" style={{ height: '30px', width: '30px' }} />
                    </Link>
                    <Box display='flex' flex-wrap='wrap' >
                        <Button onClick={() => setOpen(true)} >
                            <img style={{ width: '25px', height: '25px' }} src="photo/lang.jpg" alt='lang' />
                        </Button>
                        {open && (
                            <Box display='grid' onClick={() => setOpen(false)}>
                                <Button variant="text" style={{ color: "white" }} onClick={() => changeLanguage('uk')}> uk</Button>
                                <Button variant="text" style={{ color: "white" }} onClick={() => changeLanguage('en')}> en</Button>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </ThemeProvider>
        </AppBar>
    )
}