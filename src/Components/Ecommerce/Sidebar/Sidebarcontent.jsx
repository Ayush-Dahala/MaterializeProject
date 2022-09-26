import React from "react";
import './Sidebar.css'
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


export default function Sidebarcontent() {
  return (
    <div className="wholesidebar">
      <div className="listofitem2">
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
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <DescriptionOutlinedIcon />
              </div>
              <h3>Invoice</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="cofinedown">
            <div className="divleftlist">
              <div className="icon">
                <PersonOutlineOutlinedIcon />
              </div>
              <h3>User</h3>
            </div>
            <div className="leftsidebar">
              <KeyboardArrowRightIcon />
            </div>
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
        </div>
      </div>
    </div>
  );
}
