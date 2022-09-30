import React from 'react'
import Chart from "react-apexcharts";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import styled from 'styled-components';

let state = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar:{
          show:false
      }
      },
    
      xaxis: {
        categories: ['S','M','T','W','T','F','S'],
        labels:{
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
  
      dataLabels:{
        enabled:false,
        
        
      },
      plotOptions:{
        bar:{
          columnWidth:"60%",
          borderRadius:5
        }
      },
      colors:["rgb(102, 108, 255)"]
    
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70],
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
    padding:20px 0px;
  `

const ChartWork = () => {
  return (
    <div style={{border:'1px solid',borderRadius:10,borderColor:'rgba(76, 78, 100, 0.28)'}}>
      <div style={{paddingLeft:20}}>
        <h2 style={{fontSize:'1.50rem',fontWeight:'500',color:'rgba(76, 78, 100, 0.87)',letterSpacing:0.15}}>Visits By Day</h2>
        <Para>Total 248.5k Visits</Para>
      </div>
      <StyledChart className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart style={{borderRadius:5}}
              options={state.options}
              series={state.series}
              type="bar"
              // width="346"
              height="260"
              colors="red"
            />
          </div>
        </div>
      </StyledChart>
      <div style={{display:'flex'}}>
        <div style={{paddingBottom:17,paddingLeft:20}}>
        <h3 style={{fontSize:'1.2rem',fontWeight:'500',color:'rgba(76, 78, 100, 0.87)',letterSpacing:0.15}}>Most Visited Day</h3>
        <Para>Total 62.4k Visits on Thursday</Para>
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'auto',paddingRight:22}}>
          <ArrowCircleRightIcon style={{height:51,width:42,color:'rgb(102, 108, 255)'}}/>
        </div>
      </div>
    </div>
  )
}

export default ChartWork;
