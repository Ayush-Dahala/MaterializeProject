import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Tabelview(props) {
  return (
    <div className="outerprojectplanning">
      <div className="project-planning">
        <div className="project-name">
          <p>{props.ProjectPlanning}</p>
        </div>
        <div className="color-ad-btn">
          <div className="admin">
            <span>{props.Adminstration}</span>
          </div>
          <div className="user">
            <span>{props.User}</span>
          </div>
          <div className="support">
            <span>{props.support}</span>
          </div>
        </div>
        <div className="date">
          <p>{props.Date}</p>
        </div>
        <div className="del-edit">
          <div className="int-del-edit">
            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
