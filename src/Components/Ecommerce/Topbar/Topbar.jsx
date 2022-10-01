import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilepng from "./1.jpg"
import ScrollBar from "./ScrollBar";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './ScrollBar.css'
import { useNavigate } from "react-router-dom";


export default function Topbar() {
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ProfilePage=()=>{
    navigate('/profile')
  }

  const ecommerceRender=()=>{
    navigate('/Ecommerce')
  }

  return (
    <>
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <div className="logo" style={{display:'block'}}>
            <SearchIcon />
            <input
              type="text"
              name="searchbar"
              id="search"
              placeholder="Search(ctrl+/)"
            />
          </div>
        </div>
        <div className="topright">
          <div className="topbarIcons">
            <div className="indiviualIcons">
              <TranslateIcon />
            </div>
            <div className="indiviualIcons">
              <DarkModeIcon />
            </div>
            <div className="indiviualIcons">
              <NotificationsIcon />
            </div>
            {/* <div className="profileImg" style={{display:'flex',flexDirection:'column'}}>
              <img src={profilepng} className="toprightImage" />
    
            </div> */}
            <div>
          <img
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} src={profilepng} className="toprightImage"></img>
      <Menu id="fade-menu" MenuListProps={{'aria-labelledby': 'fade-button'}} style={{marginTop:10}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={ecommerceRender}><img src={profilepng} style={{width:35,height:35,borderRadius:'50%'}}/>
        <div style={{paddingLeft:14}}>
        <h3 style={{lineHeight:0,color:'rgba(76, 78, 100, 0.87)',fontWeight:600}}>John Doe</h3>
        <h2 style={{lineHeight:0.5,fontSize:'0.8rem',color:'rgba(76, 78, 100, 0.38)',fontWeight:400}}>Admin</h2>
        </div>
        </MenuItem>
        <hr style={{borderColor:'rgba(76, 78, 100, 0.28)',color:'rgba(76, 78, 100, 0.28)',border:'0.1px solid'}}/>
        <div>
        <MenuItem onClick={ProfilePage}><li className="navigate"><PermIdentityOutlinedIcon style={{paddingRight:10}}/>Profile</li></MenuItem>
        <MenuItem onClick={handleClose}><li className="navigate"><LocalPostOfficeOutlinedIcon style={{paddingRight:10}}/>Inbox</li></MenuItem>
        <MenuItem onClick={handleClose}><li className="navigate"><ChatBubbleOutlineOutlinedIcon style={{paddingRight:10}}/>Chat</li></MenuItem>
        <hr style={{borderColor:'rgba(76, 78, 100, 0.28)',color:'rgba(76, 78, 100, 0.28)',border:'0.1px solid'}}/>
        <MenuItem onClick={handleClose}><li className="navigate"><SettingsOutlinedIcon style={{paddingRight:10}}/>Setting</li></MenuItem>
        <MenuItem onClick={handleClose}><li className="navigate"><AttachMoneyOutlinedIcon style={{paddingRight:10}}/>Pricing</li></MenuItem>
        <MenuItem onClick={handleClose}><li className="navigate"><HelpOutlineOutlinedIcon style={{paddingRight:10}}/>FAQ</li></MenuItem>
        <hr style={{borderColor:'rgba(76, 78, 100, 0.28)',color:'rgba(76, 78, 100, 0.28)',border:'0.1px solid'}}/>
        <MenuItem onClick={handleClose}><li className="navigate"><LogoutOutlinedIcon style={{paddingRight:10}}/>Logout</li></MenuItem>
        </div>
      </Menu>
    </div>

          </div>
           
        </div>
      </div>
    </div>
   
    </>
  );
}
