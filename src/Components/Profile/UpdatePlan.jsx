import { Button, LinearProgress, styled } from '@mui/material'
import React from 'react'

const Wrapper=styled('div')({
    padding: '37px 18px',
    borderRadius:10,
    border:'2px solid rgb(102, 108, 255)',
    

})

const UpperPart=styled('div')({
    display:'flex'
})

const UpgradeButton=styled(Button)`
    margin: auto;
    display: flex;
    width: 90%;
    background-color:rgb(102, 108, 255);
`



const UpdatePlan = () => {
  return (
    <Wrapper>
      <UpperPart>
        <span style={{display:'flex',alignItems:'center',color:'rgb(102, 108, 255)',background:'rgba(102, 108, 255, 0.12)',fontSize:'0.75rem',borderRadius:5,padding:'0px 10px'}}>Standard</span>
        <div style={{display:'flex',marginLeft:'auto'}}>
        <sup style={{paddingRight:3,color:'rgb(102, 108, 255)'}}>$</sup>
        <span style={{fontSize: '2.2rem',lineHeight: 1,color:'rgb(102, 108, 255)'}}>99</span>
        <sub style={{paddingTop:12}}>/month</sub>
        </div>
      </UpperPart>
      <div>
        <ul style={{fontSize:'0.875rem',lineHeight:2,color:'rgba(76, 78, 100, 0.68)',padding:'2px 19px'}}>
            <li>10 Users</li>
            <li>Upto 10GB Storage</li>
            <li>Basic Support</li>
        </ul>
      </div>
      <div>
        <div style={{display:'flex',lineHeight:0,color:'rgba(76, 78, 100, 0.68)'}}>
            <h5>Days</h5>&nbsp;
            <h5 style={{marginLeft:'auto'}}>26 of 30 Days</h5>
        </div>
      <LinearProgress
            variant="determinate"
            value='80'
            sx={{
                backgroundColor: 'rgba(102, 108, 255, 0.12)',
                width:'90%',
                margin:'auto',
                height:'8px',
                borderRadius:'10px',
                "& .MuiLinearProgress-bar": {
                backgroundColor: 'rgb(102, 108, 255)'
    }
  }}
/>
  <h5 style={{fontSize:'0.75rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400,lineHeight:0}}>4 days Remaining</h5>
      </div>
  <UpgradeButton variant='contained' >UPGRADE PLAN</UpgradeButton>
    </Wrapper>
  )
}

export default UpdatePlan
