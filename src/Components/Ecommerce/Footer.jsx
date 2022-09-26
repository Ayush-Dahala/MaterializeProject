import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer-content">
        <div className="intercontent">
          <div className="leftfootercontent">
            <p>
              © 2022, Made with <span>🧡</span> by <a href="#">Pixinvet</a>
            </p>
          </div>
          <div className="rightfootercontent">
            <a href="#">Licence</a>
            <a href="#">More Themes</a>
            <a href="#">Dcumentation</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}
