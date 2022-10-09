import { Grid,styled } from '@mui/material'
import React from 'react'
import SidebarMain from '../Ecommerce/Sidebar/SidebarMain'
import Topbar from '../Ecommerce/Topbar/Topbar'
import ActivityTimeline from './ActivityTimeline'
import Details from './Details'
import InvoiceList from './InvoiceList'
import ProjectList from './ProjectList'
import UpdatePlan from './UpdatePlan'
import Footer from '../Ecommerce/Footer'

const SideBar=styled(Grid)(({theme})=>({
  display:'block',
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}))

const Profile = () => {
  return (
    <Grid container>
      <SideBar item lg={3} md={4} sm={0} xs={0}>
            <SidebarMain/>
      </SideBar>
      <Grid item lg={9} md={8} sm={12} xs={12}>
      <Grid item lg={12} md={12} sm={12} xs={12} style={{height:'10vh',position:'sticky',left:0}}>
            <Topbar/>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4} md={12} sm={12} xs={12}>
            <Details/>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
            <ProjectList/>
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item lg={4} md={12} sm={12} xs={12} style={{marginTop:20}}>
            <UpdatePlan/>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
            <ActivityTimeline/>
        </Grid>
      </Grid>
      <Grid container spacing={2}style={{marginTop:20}} >
        <Grid item lg={4}>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
            <InvoiceList/>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <SideBar item lg={12} md={12} sm={12} xs={12}>
          <Footer/>
        </SideBar>
      </Grid>
        </Grid>
    </Grid>
  )
}

export default Profile
