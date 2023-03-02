import { Grid, Paper, styled, Typography, Avatar, Box } from "@mui/material"
import { Container } from '@mui/system'
import React from "react"
import { useTranslation } from "react-i18next";
import icon from './photo/pop_site.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: ' 	#B0C4DE ',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '185px',
    marginTop: '50px'

}));

export const Home = () => {
    const { t } = useTranslation()
    return (
        <Container style={{ margin: 'auto', width: '1200px' }} >
            <img style={{ width: '100%', height: '330px', marginTop: '72px' }} src={icon} alt="mainPhoto" />
            <Typography style={{ textAlign: 'center', fontSize: '35px', marginTop: '30px' }}>{t('home.title')}</Typography>
            <Grid container spacing={1}>  
                <Grid container item spacing={5}>
                    <React.Fragment >
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>1</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6" >{t('home.google.name')} </Typography>
                                    <Typography variant="subtitle2">{t('home.google.text')} </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>2</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6" >{t('home.youTube.name')} </Typography>
                                    <Typography variant="subtitle2">{t('home.youTube.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>3</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6" >{t('home.facebook.name')} </Typography>
                                    <Typography variant="subtitle2"> {t('home.facebook.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>4</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6">{t('home.baidu.name')} </Typography>
                                    <Typography variant="subtitle2">{t('home.baidu.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>5</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6" >{t('home.wikipedia.name')} </Typography>
                                    <Typography variant="subtitle2">{t('home.wikipedia.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid><Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>6</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6">{t('home.yahoo.name')} </Typography>
                                    <Typography variant="subtitle2">{t('home.yahoo.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid><Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>7</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6" >{t('home.amazon.name')}</Typography>
                                    <Typography variant="subtitle2">{t('home.amazon.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid><Grid item xs={6}>
                            <Item>
                                <Avatar style={{ margin: 'auto' }}>8</Avatar>
                                <Box style={{ marginTop: '10px' }}>
                                    <Typography variant="h6">{t('home.twitter.name')}</Typography>
                                    <Typography variant="subtitle2">{t('home.twitter.text')}</Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        </Container>
    )
}