import React from "react";
import "./MarketAndSales.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export default function MarketAndSales() {
  return (
    <div>
      <div className="Marketcontent">
        <div className="wrraped">
          <div className="toppartwrraper">
            <div className="salesinfo">
              <h4 style={{lineHeight:0}}>Marketing & Sales</h4>
              <p style={{lineHeight:0}}>
                Total 42.5k Sales
                <span>
                  +18% <KeyboardArrowUpOutlinedIcon className="im" />
                </span>
              </p>
            </div>
            <div className="verticalrate">
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="middlemarket">
            <div className="imgic">
              <img
                src="/marketing-expense-logo.png"
                alt=""
                style={{ width: 90, height: 90 , borderRadius:5 }}
              />
            </div>
            <div className="rightmiddlemarket" style={{lineHeight:0}}>
              <div className="righttopheader">
                <h3>Marketing Expense</h3>
              </div>
              <div className="multigrid">
                <div className="multigridfirst">
                  <div className="multibox-root">
                    <div className="intmultibox">5k</div>
                    <span>Operating</span>
                  </div>
                  <div className="multibox-root">
                    <div className="intmultibox">2k</div>
                    <span>Financial</span>
                  </div>
                </div>
                <div className="multigridfirst">
                  <div className="multibox-root">
                    <div className="intmultibox">6k</div>
                    <span>Expense</span>
                  </div>
                  <div className="multibox-root">
                    <div className="intmultibox">1k</div>
                    <span>Operating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttonmarket" style={{lineHeight:0}}>
            <button className="bt1">Details</button>
            <button className="bte">Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}
