import React from 'react'
import Banner from './Banner'
import Category from './Category'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import Post from './Post'

const Home = () => {
  return (
    <>
    <Banner/>
    <Grid container>
          <Grid item lg={2} sm={2} xs={2}>
          <Category/>
          </Grid>
       <Grid container item xs={12} sm={10} lg={10}>
       <Post/>
       </Grid>
   </Grid>

    </>
  
  )
}

export default Home