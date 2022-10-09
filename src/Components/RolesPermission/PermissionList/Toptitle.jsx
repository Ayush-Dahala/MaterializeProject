import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Toptitle.css";
export default function Toptitle() {
  return (
    <div>
      <div className="toptitle">
        <div className="div-Name">
          <div className="Name-div">
            <div>Name</div>
          </div>
          <div className="ic-down">
            <ArrowDownwardIcon />
          </div>
        </div>
        <div className="ic">
          <MoreVertIcon />
        </div>
        <div className="div-Name">
          <div className="Name-div">
            <div>Assign To</div>
          </div>
        </div>
        <div className="ic">
          <MoreVertIcon />
        </div>
        <div className="div-Name">
          <div className="Name-div">
            <div>Created</div>
          </div>
        </div>
        <div className="ic">
          <MoreVertIcon />
        </div>
        <div className="div-Name">
          <div className="Name-div">
            <div>Actions</div>
          </div>
        </div>
        <div className="ic">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}
