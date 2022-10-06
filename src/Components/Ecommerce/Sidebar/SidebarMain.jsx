import React, { useState } from "react";
import "./Sidebar.css";
import logo from "./material-ui.svg";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TranslateIcon from '@mui/icons-material/Translate';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined';
import ReorderIcon from '@mui/icons-material/Reorder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useNavigate } from "react-router-dom";

export default function SidebarMain() {

  const openInvoice=()=>{
    open=="none"?setOpen("block"):setOpen("none")
  }

  const openUser=()=>{
    user=="none"?setUser("block"):setUser("none")
  }

  const[open,setOpen]=useState('none')
  const[user,setUser]=useState('none')

  const navigate=useNavigate();

  const openView=()=>{
    navigate('/profile')
  }

  return (
    <div className="wholesidebar" style={{position:'fixed'}}>
      <div className="topheadersidebar">
        <div className="divleftsidebar">
          <img src={logo} alt="logo" />
          <h3>Materialise</h3>
        </div>
        <div className="leftsidebar">
          <KeyboardDoubleArrowLeftIcon />
        </div>
      </div>
      <div className="listitemcontenttop">
        <div className="cofine">
          <div className="divleftlist">
            <div className="icon">
              <HomeIcon />
            </div>
            <h3>Dashboard</h3>
          </div>
          <div className="leftlist">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className="cofinelist-all">
        <div className="cofin-list">
          <CircleIcon style={{ width: 30, height: 10 }} />
          <h4>CRM</h4>
        </div>
        <div className="cofin-list">
          <CircleIcon style={{ width: 30, height: 10 }} />
          <h4>Analytics</h4>
        </div>
        <div className="cofin-list active">
          <CircleIcon style={{ width: 30, height: 10 }} />
          <h4>eCommerce</h4>
        </div>
      </div>
      <div className="listofitem">
        <li>
          <div className="icon">
            <HorizontalRuleIcon style={{ width: 20, height: 10 }} />
          </div>
          APP & PAGES
        </li>
        <div className="listitemdown">
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <EmailOutlinedIcon />
              </div>
              <h3>Email</h3>
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <ChatBubbleOutlineIcon />
              </div>
              <h3>Chat</h3>
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <CalendarTodayIcon />
              </div>
              <h3>Calender</h3>
            </div>
            <div className="dropdown__menu" >
             
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <DescriptionOutlinedIcon />
              </div>
              <h3>Invoice</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon onClick={openInvoice}/>
            </div>
          </div>
          <div className="dropdown__menu">
              <ul style={{display:`${open}`}}>
                <li style={{fontSize:18,lineHeight:2}}>List</li>
                <li style={{fontSize:18,lineHeight:2}}>Preview</li>
                <li style={{fontSize:18,lineHeight:2}}>Edit</li>
                <li style={{fontSize:18,lineHeight:2}}>Add</li>
              </ul>
          </div>
          

          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <PersonOutlineOutlinedIcon />
              </div>
              <h3>User</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon onClick={openUser} />
            </div>
            
          </div>
          <div className="dropdown__menu">
              <ul style={{display:`${user}`}}>
                <li style={{fontSize:18,lineHeight:2}}>List</li>
                <li onClick={openView} style={{fontSize:18,lineHeight:2}}>View</li>
              </ul>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <FilePresentIcon />
              </div>
              <h3>Dialog Example</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <LockOutlinedIcon />
              </div>
              <h3>Role & Permission</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <DocumentScannerOutlinedIcon />
              </div>
              <h3>Pages</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <li className="snddownitem">
            <div className="icon2">
              <HorizontalRuleIcon style={{ width: 20, height: 10 }} />
            </div>
            USER INTERFACE
          </li>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <TranslateIcon/>
              </div>
              <h3>Typography</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <AcUnitIcon />
              </div>
              <h3>Icon</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <CreditCardOutlinedIcon />
              </div>
              <h3>Card</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <CallToActionOutlinedIcon />
              </div>
              <h3>Components</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <li className="snddownitem2">
            <div className="icon2">
              <HorizontalRuleIcon style={{ width: 20, height: 10 }} />
            </div>
           FORM & TABLE
          </li>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <ReorderIcon />
              </div>
              <h3>Form Layout</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <DashboardIcon/>
              </div>
              <h3>Form Elements</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <TaskAltIcon />
              </div>
              <h3>Form Validation</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <TableChartOutlinedIcon />
              </div>
              <h3>Form Wizard</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <ViewComfyOutlinedIcon />
              </div>
              <h3>Table </h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <DocumentScannerOutlinedIcon />
              </div>
              <h3>Mui & DataGrid</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <li className="snddownitem3">
            <div className="icon2">
              <HorizontalRuleIcon style={{ width: 20, height: 10 }} />
            </div>
           CHART & MISC
          </li>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <PieChartOutlineOutlinedIcon/>
              </div>
              <h3>Chart</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <ShieldOutlinedIcon />
              </div>
              <h3>Access & Control</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <MoreHorizOutlinedIcon />
              </div>
              <h3>Others</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
