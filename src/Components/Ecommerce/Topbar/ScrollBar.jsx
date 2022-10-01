import React from 'react'
import profilepng from "../Topbar/1.jpg"
import './ScrollBar.css'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const ScrollBar = () => {
  return (
    <div style={{border:'1px solid',padding:0,borderRadius:10,borderColor:'rgba(76, 78, 100, 0.28)',backgroundColor:'#fff',zIndex:2}} className="scrollBar">
      <div style={{display:'flex',width:'100%',alignItems:'center',paddingLeft:14}}>
        <img src={profilepng} style={{width:35,height:35,borderRadius:'50%'}}/>
        <div style={{paddingLeft:14}}>
        <h3 style={{lineHeight:0,color:'rgba(76, 78, 100, 0.87)',fontWeight:600}}>John Doe</h3>
        <h2 style={{lineHeight:0.5,fontSize:'0.8rem',color:'rgba(76, 78, 100, 0.38)',fontWeight:400}}>Admin</h2>
        </div>
      </div>
        <hr style={{borderColor:'rgba(76, 78, 100, 0.28)',color:'rgba(76, 78, 100, 0.28)'}}/>
      <ul style={{listStyle:'none',paddingLeft:0}} className="navigate">
        <li><PermIdentityOutlinedIcon style={{paddingRight:10}}/>Profile</li>
        <li><LocalPostOfficeOutlinedIcon style={{paddingRight:10}}/>Inbox</li>
        <li><ChatBubbleOutlineOutlinedIcon style={{paddingRight:10}}/>Chat</li>
        <hr style={{borderColor:'rgba(76, 78, 100, 0.28)',color:'rgba(76, 78, 100, 0.28)',border:'0.1px solid'}}/>
        <li><SettingsOutlinedIcon style={{paddingRight:10}}/>Setting</li>
        <li><AttachMoneyOutlinedIcon style={{paddingRight:10}}/>Pricing</li>
        <li><HelpOutlineOutlinedIcon style={{paddingRight:10}}/>FAQ</li>
        <hr style={{borderColor:'rgba(76, 78, 100, 0.28)',color:'rgba(76, 78, 100, 0.28)',border:'0.1px solid'}}/>
        <li><LogoutOutlinedIcon style={{paddingRight:10}}/>Logout</li>
      </ul>
    </div>
  )
}

export default ScrollBar
