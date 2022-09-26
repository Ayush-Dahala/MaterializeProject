import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilepng from "./1.jpg"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <div className="logo">
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
            <div className="profileImg">
              <img src={profilepng} className="toprightImage" />
              <span className="onlineshow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
