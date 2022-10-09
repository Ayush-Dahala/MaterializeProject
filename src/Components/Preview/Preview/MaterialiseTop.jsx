import React from "react";
import logoM from '../../../assets/material-ui.svg'
import './MaterialiseTop.css'

export default function MaterialiseTop() {
  return (
    <div>
      <div className="materialisetop">
        <div className="internmaterialise">
          <div className="left-materialise">
            <div className="internalmaterialise">
              <div className="logowithheading">
                <img src={logoM} alt="" />
                <h5>Materialise</h5>
              </div>
              <div className="briefpara">
                <p>Office 149, 450 South Brand Brooklyn</p>
                <p>San Diego County, CA 91905, USA</p>
                <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
              </div>
            </div>
          </div>
          <div className="rightmaterialise">
            <div className="internalright">
              <p className="Invoice4">Invoice <span>#4987</span> </p>
              <p>Date Issue: <span>12-09-2008</span></p>
              <p>Date Due: <span>17-03-2023</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
