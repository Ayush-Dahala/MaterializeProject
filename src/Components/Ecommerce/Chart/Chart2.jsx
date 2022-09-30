import React from 'react'
import Chart from "react-apexcharts";
import styled from 'styled-components';

let state = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar:{
            show:false
        }
      },
      dataLabels:{
        enabled:false
      },
      xaxis: {
        categories:[],
        labels:{
            show:false
        },
        lines:{
            show:false
          }
      },
      
      yaxis:{
        labels:{
            show:false
        },
        lines:{
            show:false
          }
      },

      colors:["#72E128"],
      plotOptions:{
        bar:{
          columnWidth:"35%",
          borderRadius:6
        }
      },
    
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91,80,40,20,55,67],
        
      }
    ]
  };

  const Para=styled.p`
    line-height:0;
    font-size:0.875rem;
    color:rgba(76, 78, 100, 0.68);
    font-weigth:400
  `

  const StyledChart=styled.div`
    // padding:20px 0px;
  `

const Chart2 = () => {
  return (
    <div style={{border:'1px solid',borderRadius:10,borderColor:'rgba(76, 78, 100, 0.28)'}}>
      <div style={{paddingLeft:20,display:'flex'}}>
        <div>
        <h2 style={{fontSize:'1.50rem',fontWeight:'500',color:'rgba(76, 78, 100, 0.87)',letterSpacing:0.15}}>Live Visitors</h2>
        <Para>Total 890 Visitors are live</Para>
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'auto',paddingRight:20}}>
            <h6 style={{color:'#72E128',fontSize:'0.875rem'}}>+78.2%</h6>
        </div>
      </div>
      <StyledChart className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart style={{borderRadius:5}}
              options={state.options}
              series={state.series}
              type="bar"
              height="164"
              colors="red"
            />
          </div>
        </div>
      </StyledChart>
    </div>
  )
}

export default Chart2;
