import React from 'react'
import image1 from './img1.png'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { styled} from '@mui/system';
import {Button} from '@mui/material'

const Wrapper=styled("div")({
    padding:'40px 20px',
    border:'1px solid rgba(76, 78, 100, 0.12)',
    borderRadius:10,
})

const Image=styled("img")({
    width: '7rem',
    borderRadius: 10,
})

const Price=styled("div")({
    display:'flex',
    alignItems:'center',
    paddingRight:10,
    paddingLeft:20
})

const List=styled("li")({
    display:'flex',
    lineHeight:0,

})

const Details = () => {
  return (
    <Wrapper>
      <div>
        <div style={{textAlign:'center'}}>
        <Image src={image1}/>
        <h2 style={{lineHeight:0,fontWeight:500}}>Seth Hallam</h2>
        <span style={{borderRadius: 5,padding:'1px 5px',background:'rgba(102, 108, 255, 0.12)',color: "rgba(102, 108, 255)"}}>Subscriber</span>
        <div style={{display:'flex',justifyContent:'center',paddingTop:20}}>
            <Price>
                <CheckOutlinedIcon style={{borderRadius: 5,padding: 8,background:'rgba(102, 108, 255, 0.12)',color: "rgba(102, 108, 255)"}}/>
                <div style={{display:'flex',flexDirection:'column',paddingLeft:6}}>
                <span style={{color:'rgba(76, 78, 100, 0.87)' ,fontWeight:500,fontSize:'1.45rem',textAlign:'left'}}>1.23k</span>
                <span style={{color:'rgba(76, 78, 100, 0.68)' ,fontWeight:400,fontSize:'0.875rem'}}>Task Done</span>
                </div>
            </Price>
            <Price >
                <StarBorderOutlinedIcon style={{borderRadius: 5,padding: 8,background:'rgba(102, 108, 255, 0.12)',color: "rgba(102, 108, 255)"}}/>
                <div style={{display:'flex',flexDirection:'column',paddingLeft:6}}>
                <span style={{color:'rgba(76, 78, 100, 0.87)' ,fontWeight:500,fontSize:'1.45rem',textAlign:'left'}}>568</span>
                <span style={{color:'rgba(76, 78, 100, 0.68)' ,fontWeight:400,fontSize:'0.875rem'}}>Project Done</span>
                </div>
            </Price>
        </div>
        </div>
      </div>
      <div>
        <h3>Details</h3>
        <hr />
        <ul style={{padding:"0px 20px"}}>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Username: </h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>@shallamb</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Email: </h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>shallamb@hugedomains.com</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Status:</h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgb(253, 181, 40)',fontWeight:500,background:'rgb(253, 181, 40,0.65)'}}>Pending</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Role:</h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>Subscriber</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Tax Id:</h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>Tax-8894</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Contact:</h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>+1 (234) 464-0600</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Language:</h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>English</h4>
            </List>
            <List>
                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Country:</h4>
                <h4 style={{paddingLeft:5,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>Peru</h4>
            </List>
        </ul>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant="contained" style={{backgroundColor:'rgb(102, 108, 255)',padding:'0px 24px'}}>EDIT</Button>
        <Button variant="outlined" style={{color:'rgb(255, 77, 73)',borderColor:'rgb(255, 77, 73)',marginLeft:47}}>SUSPEND</Button>
        </div>  
   </Wrapper>
  )
}


export default Details
