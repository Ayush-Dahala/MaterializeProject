import React from "react";
import './Subtotal.css'

export default function Subtotal() {
  return (
    <div>
      <div className="subtotalmain">
        <div className="subtotalinternal">
           <div className="salespersondec">
              <div className="topsales">
               <p id="salesone">Saleperson :</p>
               <p>Tommy shelby</p>
              </div>
              <p>Thanks for your bussiness</p>
           </div>
           <div className="subtotaltabel">
              <div className="first">
               <p>Subtotal:</p>
               <p>$1000</p>
              </div>
              <div className="Second">
               <p>Discount:</p>
               <p>$157</p>
              </div>
              <div className="Third">
               <p>Tax:</p>
               <p>21%</p>
              </div>
              <hr/>
              <div className="fouth">
              <p>Total</p>
              <p>$1690</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
