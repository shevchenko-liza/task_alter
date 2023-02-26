import { Grid, Paper, styled, Typography, Avatar, Box } from "@mui/material"
import { Container } from '@mui/system'
import React from "react"
import icon from './photo/pop_site.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: ' 	#B0C4DE ',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '170px',
    marginTop: '50px'

}));

export const Home = () => {
    return (
        <Container style={{ margin: 'auto', width: '1200px' }} >
            <img style={{ width: '100%', height: '330px', marginTop: '72px' }} src={icon} alt="site" />
            <Typography style={{ textAlign: 'center', fontSize: '35px', marginTop: '30px' }}>The most visited sites</Typography>
            <Grid container spacing={1}>
                <Grid container item spacing={5}>
                    <React.Fragment >
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>1</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Google </Typography>
                                    <Typography variant="subtitle2">American transnational corporation as part of the Alphabet holding, investing in Internet search, cloud computing and advertising technologies. </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>2</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >YouTube</Typography>
                                    <Typography variant="subtitle2">A video hosting service that provides users with video storage, delivery and display services. YouTube has become a popular video hosting and its own site in the world in terms of the number of visitors</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>3</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Facebook</Typography>
                                    <Typography variant="subtitle2"> A social network that has been operating since February 2004. It was founded by American Mark Zuckerberg mixed with a group of dorm roommates. There was a service called "The Facebook *" and was available only to representatives of Harvard.</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>4</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Baidu</Typography>
                                    <Typography variant="subtitle2">A Chinese company providing web services, the main of which is a search engine of the same name - the leader among Chinese search engines. Ranks fourth in the global search engine market with a share of 1.06%</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>5</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Wikipedia</Typography>
                                    <Typography variant="subtitle2">A publicly available multilingual universal Internet encyclopedia with free content, implemented on the principles of a wiki. The site is owned by the American non-profit organization Wikimedia Foundation, which has 37 regional offices.</Typography>
                                </Box>
                            </Item>
                        </Grid><Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>6</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Yahoo</Typography>
                                    <Typography variant="subtitle2">an American company that owned the second most popular search engine in the world and provides a number of services united by the Internet portal Yahoo</Typography>
                                </Box>
                            </Item>
                        </Grid><Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>7</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Amazon</Typography>
                                    <Typography variant="subtitle2">American company, the largest in the world in the markets of e-commerce platforms and public cloud computing by revenue and market capitalization</Typography>
                                </Box>
                            </Item>
                        </Grid><Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>8</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography >Twitter</Typography>
                                    <Typography variant="subtitle2">An American microblogging service and social network where users post and interact with messages known as "tweets". Users interact with Twitter through a browser, mobile app, or API. Until April 2020, services were available via SMS.</Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        </Container>
    )
}