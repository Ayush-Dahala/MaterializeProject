import { Grid, styled } from '@mui/material'
import React from 'react'
import SidebarMain from '../../Ecommerce/Sidebar/SidebarMain'
import Topbar from '../../Ecommerce/Topbar/Topbar'
import Preview from './Preview'
import Footer from '../../Ecommerce/Footer'

const SideBar=styled(Grid)(({theme})=>({
    display:'block',
    [theme.breakpoints.down('md')]:{
      display:'none',
    }
  }))

const PreviewContainer = () => {
  return (
    <div>
      <Grid container>
      <SideBar item lg={3} md={4} sm={0} xs={0}>
            <SidebarMain/>
      </SideBar>
      <Grid item lg={9} md={8} sm={12} xs={12}>
      <Grid item lg={12} md={12} sm={12} xs={12} style={{height:'10vh',position:'sticky',left:0}}>
            <Topbar/>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={12}>
            <Preview/>
        </Grid>
        <SideBar item lg={12}>
            <Footer/>
        </SideBar>
      </Grid>
      </Grid>
      </Grid>
    </div>
  )
}

export default PreviewContainer
