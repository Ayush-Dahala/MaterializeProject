import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './Rowperpage.css'

export default function Rowperpage() {
  return (
    <div>
      <div className="Rowperpage">
        <div className="rowarraow">
          <p>Row Per Page</p>
          <div className="tendrop">
            <div>10</div>
            <ArrowDropDownIcon />
          </div>
          <p>1-9 of 9</p>
          <div className="arrowleftbut">
            <button>
              <ArrowBackIosNewIcon />
            </button>
            <button>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
