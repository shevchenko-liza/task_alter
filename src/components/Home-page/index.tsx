import { Link } from "react-router-dom";

import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";
import icon from './photo/avt_icon.png'

export const Home = () => {
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
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#3A5041', height: '80px' }} >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/"}>
                        <Typography variant="body2" >
                            Homes
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/news"}>
                        <Typography variant="body2" >
                            News
                        </Typography>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/profile"}>
                        <Typography variant="body2" >
                            Profile
                        </Typography>
                    </Link>

                    {/* <Link style={{ textDecoration: 'none', color: 'white' }} to={"/profile"}>Profile </Link>
                        {showHome===true?
                    <Profile/> :
                  false
             } */}

                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/user"}>
                        <img src={icon} style={{ height: '25px', width: '25px' }} />
                    </Link>
                </Toolbar>
            </ThemeProvider>
        </AppBar>
    )
}