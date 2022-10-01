import React from "react";
import "./Homecontent.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function Homecontent() {
  return (
    <div>
      <div className="homecontent">
        <div className="wrraper">
          <div className="toppartwrraper">
            <div className="salesinfo">
              <h4 style={{lineHeight:0,fontWeight:500}}>Sales Overview</h4>
              <p>
                Total 42.5k Sales <span>+18% <KeyboardArrowUpOutlinedIcon className="im" style={{right:-22,top:0}}/></span>
                
              </p>
            </div>
            <div className="verticalrate">
                <MoreVertOutlinedIcon />
              </div>
          </div>
          <div className="buttonwrraper">
            <div className="content1">
              <div className="righticon">
                <Person2OutlinedIcon />
              </div>
              <div className="salesinfo1">
              <h3 style={{lineHeight:0}}>8,458</h3>
              <p style={{lineHeight:0}}>Customers</p>
              </div>
            </div>
            <div className="content1">
              <div className="righticony">
                <BarChartIcon />
              </div>
              <div className="salesinfo1">
              <h3 style={{lineHeight:0}}>$28.5k</h3>
              <p style={{lineHeight:0}}>Tota Profit</p>
              </div>
            </div>
            <div className="content1">
              <div className="righticonb">
                <TimelineIcon />
              </div>
              <div className="salesinfo1">
              <h3 style={{lineHeight:0}}>2,450k</h3>
              <p style={{lineHeight:0}}>Transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
