import { AppBar, Toolbar, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { CATALOG, catalogSlice } from "../../store/slices/catalog";

import classes from './styles.module.scss'

export const News = () => {
  const catalog = useSelector(CATALOG)
  const [visible, setVisible] = useState(3)
  const dispatch = useDispatch()

  const Show = () => {
    setVisible((prev) => prev + 3)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch(catalogSlice.actions.setList(data)))

  }, [dispatch])
  return (
    <div className={classes.box}>
      {catalog.slice(0, visible).map((item) => (
          <div >
          <div>{item.id}</div>
          <div>{item.body}</div>
          <button>Delet</button>
        </div>
      ))}
      <button onClick={Show}>Load</button>
    </div>
  )
}


