import React from 'react'
import logo1 from '../../assets/RatingSession/logo1.png'
import logo2 from "../../assets/RatingSession/logo2.png"
import { Grid, styled } from "@mui/material";
import RatingSessionBox from "./RatingSessionBox";
import WeeklySales from './WeeklySales';
import logo3 from '../../assets/WeeklySales/logo1.png';
import logo4 from '../../assets/WeeklySales/logo2.png';
import logo5 from '../../assets/WeeklySales/logo3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import UserTable from './UserTable';
import TotalOrders from './TotalOrders';
import Topbar from '../React-Dashboard/Topbar/Topbar';
import SidebarMain from '../React-Dashboard/Sidebar/SidebarMain';
import Homecontent from '../React-Dashboard/HomeContent/Homecontent';
import SalesThisMonth from '../React-Dashboard/SalesThisMonth'
import MarketAndSales from '../React-Dashboard/MarketAndSales'
import Footer from '../React-Dashboard/Footer'

const Table=styled(Grid)(({theme})=>({
  display:'block',
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))

const Ecommerce = () => {
  return (
    <>
        {/* <Grid container direction="row"> */}
          <Grid container >
          <Grid item lg={3} md={4}>
            <SidebarMain/>
          </Grid>
          <Grid item lg={9} md={8}>
          <Grid item lg={12} md={6} style={{height:'10vh'}}>
            <Topbar/>
          </Grid>
          <Grid container spacing={2}>
          <Grid item lg={6} sm={11} md={8}>
          <Homecontent/>
          </Grid>
          <Grid item lg={3}>
          <RatingSessionBox heading="Ratings" year="Year of 2022" price="8.14k" discount="+15.6%" image={logo1} backgroundColor="rgba(102, 108, 255, 0.12)" fontColor="rgb(102, 108, 255)" discountColor="rgb(114, 225, 40)"/>
          </Grid>
          <Grid item lg={3}>
          <RatingSessionBox heading="Sessions" year="Last Month" price="12.2k" discount="-25.5%" image={logo2} backgroundColor="rgba(114, 225, 40, 0.12)" fontColor="rgb(114, 225, 40)" discountColor="rgb(255, 77, 73)"/>
          </Grid>
          </Grid>

          <Grid container spacing={2} style={{marginTop:2}}>
          <Grid item lg={6} md={6} sm={12} style={{height:'38vh',width:'100%'}}>
          <Carousel autoPlay infiniteLoop >
            <WeeklySales device="Mobiles & Computers" access1="Mobile" access2="Tablet" access3="Accessories" access4="Computer" logo={logo3} />
            <WeeklySales device="Fashion" access1="T-shirt" access2="Watches" access3="Shoes" access4="Sunglasses" logo={logo4} />
            <WeeklySales device="Appliances & Electronics" access1="TV's" access2="Speaker" access3="Camera" access4="Console" logo={logo5}/>
          </Carousel>
          </Grid>
          <Grid item lg={3}>

          </Grid>
          <Grid item lg={3}>
            <SalesThisMonth/>
          </Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop:1}}>
            <Grid item lg={3}>
            <TotalOrders/>
            </Grid>
            <Grid item lg={5}>
            <MarketAndSales/>
            </Grid>
            <Grid item lg={4}></Grid>
            </Grid>
            <Grid container spacing={2} style={{marginTop:2}}>
            <Table item lg={9} md={12} >
              <UserTable/>
            </Table>
            <Grid item lg={3}>

            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <Footer/>
              </Grid>
            </Grid>

            </Grid>
          </Grid>
          </Grid>

          {/* <Grid container spacing={2}> */}
          
          
          
          
          
          
          {/* </Grid> */}

        {/* </Grid> */}
    </>
  )
}

export default Ecommerce
