import React from 'react'

import { styled,Box, Typography } from '@mui/material';


const Heading=styled('h3')({
    fontSize:'1.25rem',
    color:'rgb(255, 255, 255)',
    letterSpacing:'0.15px',
    fontWeight:'500',
})

const Number=styled("span")({
    fontSize: '0.875rem',
    color: 'rgb(255, 255, 255)',
    background: 'rgb(90, 95, 224)',
    padding:'8px 13px',
    borderRadius:8,
})



const WeeklySales = ({device,access1,access2,access3,access4,logo}) => {
  return (
    <Box style={{display:'flex',background:'#666cff',borderRadius:'10px'}}>
        <Box style={{width:'50%',paddingLeft:'26px',textAlign:'initial',paddingBottom:38}}>
            <Heading>Weekly Sales</Heading>
            <h6 style={{fontSize:'0.75rem',fontWeight:'400',color:'rgb(255, 255, 255)',letterSpacing:'0.4px',lineHeight:0}}>Total $26.5 Earning <span style={{color:'rgb(114, 225, 40)',fontSize:'0.875rem',fontWeight:'500'}}>+62%</span></h6>
            <h3 style={{fontSize:'1rem',color:'rgb(255, 255, 255)',fontWeight:400,letterSpacing:'0.15px'}}>{device}</h3>
            <Box style={{display:'flex'}}>
                <Box style={{display:'flex',flexDirection:'column'}}>
                    <Box>
                    <Number>16</Number>
                    <span style={{fontSize:'0.75rem',fontWeight:'400',width:'100%',color:'rgb(255, 255, 255)',paddingLeft:9}}>{access1}</span>
                    </Box>
                    <br/>
                    <Box>
                    <Number>16</Number>
                    <span style={{fontSize:'0.75rem',fontWeight:'400',width:'100%',color:'rgb(255, 255, 255)',paddingLeft:9}}>{access2}</span>
                    </Box>
                </Box>
                <Box style={{display:'flex',flexDirection:'column',paddingLeft:'135px'}}>
                    <Box>
                    <Number>16</Number>
                    <span style={{fontSize:'0.75rem',fontWeight:'400',width:'100%',color:'rgb(255, 255, 255)',paddingLeft:9}}>{access3}</span>
                    </Box>
                    <br/>
                    <Box>
                    <Number>16</Number>
                    <span style={{fontSize:'0.75rem',fontWeight:'400',width:'100%',color:'rgb(255, 255, 255)',paddingLeft:9}}>{access4}</span>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box style={{width:'50%',paddingLeft:'151px',paddingTop:36}}>
            <img src={logo}/>
        </Box>
    </Box>
  )
}

export default WeeklySales
