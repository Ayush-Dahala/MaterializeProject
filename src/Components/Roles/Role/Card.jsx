import React from "react";
import "./Gridcard.css";

export default function Card() {
  return (
    <div>
      <div className="inter-grid">
        <div className="inte-cover">
          <div className="humanimg">
            <div className="img-conlun">
              <img src="./pose_m1.png" alt="img" />
            </div>
          </div>
          <div className="rolesec">
            <div className="consec">
              <div className="intetnseccon">
                <button>Add Role</button>
                <p>Add role if doesn't exist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
