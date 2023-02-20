import { generatePath, Link, useParams } from "react-router-dom";
import React from 'react';
import classes from './styles.module.scss'
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export const Home = () => {

    return (
        <div>
            <AppBar>
                <Toolbar className={classes.block}  >
                    <Link to={"/"}>
                        <Typography variant="h4" >
                            Homes
                        </Typography>
                    </Link>
                    <Link to={"/news"}>
                        <Typography variant="h4" >
                            News
                        </Typography>
                    </Link>
                    <Typography variant="h4" >
                        Profile
                    </Typography>
                    <Typography variant="h4" >
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}