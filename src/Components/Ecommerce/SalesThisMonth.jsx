import React from 'react'
import './SalesThisMonth.css'
export default function SalesThisMonth() {
  return (
    <div>
      <div className="SalesthisMonth">
      <h3>Sales this Month</h3>
      <p style={{lineHeight:0}}>Total Sales This Month</p>
      <span>$28,450</span>
      <div className="img">
      <img src="/OP.png" alt="Sales" />
      </div>
      
      </div>
    </div>
  )
}
