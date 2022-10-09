import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import './Gridcard.css'

export default function Gridcard(props) {
  return (
    <div>
      <div className="inter-grid">
        <div className="inter-profile">
          <div className="top-admis-card">
            <p>Total 4 user</p>
            <div className="img-flex">
              <div className="img-container-user">
                <img src={props.img1} alt="icon" />
                {console.log(props.img1.data)}
              </div>
              <div className="img-container-user">
                <img src={props.img2} alt="icon" />
              </div>
              <div className="img-container-user">
                <img src={props.img3} alt="icon" />
              </div>
              <div className="img-container-user">
                 <img src={props.img4} alt="" />
              </div>
            </div>
          </div>
          <div className="mid-admis-card">
            <h5 className="diff">{props.diff}</h5>
          </div>
          <div className="last-admis-card">
            <p>Edit Role</p>
            <button className="copy-btn">
              <ContentCopyIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
