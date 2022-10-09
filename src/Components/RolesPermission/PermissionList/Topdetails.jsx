import React from "react";
import "./Topdetails.css";

export default function Topdetails(props) {
  return (
    <div>
      <div className="topdetails">
        <h5>{props.heading}</h5>
        <p>
          {props.para}
        </p>
      </div>
    </div>
  );
}
