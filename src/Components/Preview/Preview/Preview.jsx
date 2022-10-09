import { Tab } from "@mui/material";
import React from "react";
import MaterialiseTop from "./MaterialiseTop";
import Middletwomaterialise from "./Middletwomaterialise";
import "./Preview.css";
import PreviewTable from "./PreviewTable";
import Subtotal from "./Subtotal";
import SendIcon from '@mui/icons-material/Send';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

export default function Preview() {
  return (
    <div>
      <main>
        <div className="preview-sec">
          <div className="invoice-list">
            <div className="big-invoice-containr">
              <MaterialiseTop />
              <hr />
              <Middletwomaterialise />
              <hr />
              <PreviewTable />
              <hr />
              <Subtotal />
              <hr />
              <div className="lastsection">
                <p>
                  <strong>Note:</strong> It was a pleasure working with you and
                  your team. We hope you will keep us in mind for future
                  freelance projects. Thank You!
                </p>
              </div>
            </div>
            <div className="right-button">
              <span>
                <a href="#">Print</a>
              </span>
              <button>Download</button>
            </div>
          </div>
          <div className="send-msg-con">
            <div className="send-msg-int">
              <button className="blue-btn">
                <span><SendIcon/></span>
                Send Invoice
              </button>
              <a href="#" className="Edit">Edit Invoice</a>
              <button className="green-btn">
                <span><CurrencyPoundIcon/></span>
                Add Payment
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
