import { generatePath, Link } from "react-router-dom";

import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";

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
        <AppBar>
            <ThemeProvider theme={theme}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#3A5041', height: '80px' }}  >
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
                    <Typography variant="body2" >
                        Profile
                    </Typography>
                    <Typography variant="body2" >
                        News
                    </Typography>
                </Toolbar>
            </ThemeProvider>
        </AppBar>
    )
}