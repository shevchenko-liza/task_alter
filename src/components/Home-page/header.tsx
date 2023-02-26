import { Link } from "react-router-dom";

import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";

import icon from './photo/ic3.jpg'

export const Header = () => {
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
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/home"}>
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
                        <img src={icon} style={{ height: '30px', width: '30px' }} />
                    </Link>
                </Toolbar>
            </ThemeProvider>
        </AppBar>
    )
}