import React from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import "./Totalvisit.css";

export default function Totalvisit() {
  return (
    <div>
      <div className="cardwrapper-ext">
        <div className="cardwrapper">
          <div className="toppart">
            <div className="lefttoppart">
              <p>Total Visit</p>
              <span>41.3k</span>
            </div>
            <div className="rightpart">
              <span>
                +18% <KeyboardArrowUpOutlinedIcon className="im" />
              </span>
            </div>
          </div>
          <div className="middlepart">
            <div className="leftmiddlepart">
              <div className="lefttop">
                <div className="icon-cont">
                  <PhoneAndroidIcon className="And"/>
                </div>
                <p>Mobile</p>
              </div>
              <h6>23.5%</h6>
              <span>30,576</span>
            </div>
            <div className="middlemiddlepart">
              <span className="vs">
                <div className="vs-internal">VS</div>
              </span>
            </div>
            <div className="rightmiddlepart">
              <div className="righttop" >
                <p>Desktop</p>
                <div className="icon-contb">
                  <PersonalVideoIcon className="And"/>
                </div>
              </div>
              <div style={{paddingBottom:10}}>
              <h6>23.5%</h6>
              </div>
              <span>30,576</span>
            </div>
          </div>
          <div className="yellow">
          <div className="blue"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
