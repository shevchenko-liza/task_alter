import { Grid, Paper, styled, Typography, Button } from "@mui/material"
import { Container } from "@mui/material";
import React from "react";
import { FC, useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { CATALOG, catalogSlice, Posts } from "../../store/slices/catalog";

export const Delet: FC<Pick<Posts, 'id'>> = ({ id }) => {
  const dispatch = useDispatch()
  const handleDelete = useCallback(() => dispatch(catalogSlice.actions.unset(id)), [dispatch, id])
  return (
    <Button style={{ color: 'red' }} onClick={() => handleDelete}>
      X
    </Button>
  )
}

export const News = () => {
  const catalog = useSelector(CATALOG)
  const [visible, setVisible] = useState(3)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch(catalogSlice.actions.setList(data)))
  }, [dispatch])

  const Show = () => {
    setVisible((prev) => prev + 3)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: ' rgb(206, 225, 231) ',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '170px'
  }));

  const FormRow = () => {
    return (
      <React.Fragment>
        {catalog.slice(0, visible).map((item, id) => (
          <Grid item xs={4}>
            <Item>
              <Button sx={{ display: 'flex', marginLeft: 'auto', marginBottom: '-20px' }}  >
                <Delet id={item.id} />
              </Button>
              <Typography style={{ display: 'none' }} key={item.id}>{item.id}</Typography>
              <Typography >{item.id}</Typography>
              <Typography variant="subtitle2" >  {item.body}</Typography>
            </Item>
          </Grid>
        ))}
        <Button style={{ margin: '20px auto' }} onClick={Show}>{t('news.button')}</Button>
      </React.Fragment>
    );
  }
  return (
    <Container sx={{ maxWidth: '1200px', marginTop: '150px' }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Container>

  )
}



