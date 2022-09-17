import { Box, Typography } from '@mui/material'
import React from 'react'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const TotalOrders = () => {
  return (
    <Box style={{borderRadius:10,backgroundColor:'#fff',border:'1px solid',borderColor:'rgba(76, 78, 100, 0.28)'}}>
      <Box style={{display:'flex',padding: '23px 10px',borderBottom:'1px solid',borderBottomColor:'rgba(76, 78, 100, 0.28)'}}>
        <Box>
            <Box style={{display:'flex'}}>
            <DataUsageOutlinedIcon style={{height: 85,width: 92,color:'rgb(102, 108, 255)'}}/>
            <DevicesOutlinedIcon style={{paddingTop:29,marginLeft: -57,color:'rgb(102, 108, 255)'}}/>
            </Box>
        </Box>
        <Box style={{paddingLeft:47,margin:'auto 0'}}>
          <Box style={{display:'flex'}}>
            <span style={{fontSize:'1.25rem',fontWeight:'500',color:'rgba(76, 78, 100, 0.87)'}}>84k</span>
            <Box>
            <span style={{fontSize:'0.875rem',fontWeight:'500',color:'rgb(255, 77, 73)',paddingLeft:7,display:'flex',alignItems:'center',paddingTop:'3px'}}>-24%
            <span style={{display:'block'}}><KeyboardArrowDownOutlinedIcon/></span>
            </span>
            </Box>
            </Box>
            
            <Typography style={{fontSize:'0.875rem',fontWeight:'400',color:'rgba(76, 78, 100, 0.68)',letterSpacing:1}}>Total Impressions</Typography>
            
        </Box>
      </Box>
      <Box>
      <Box style={{display:'flex',padding: '23px 10px'}}>
        <Box>
            <Box style={{display:'flex'}}>
            <DataUsageOutlinedIcon style={{height: 85,width: 92,color:'rgb(253, 181, 40)'}}/>
            <DevicesOutlinedIcon style={{paddingTop:29,marginLeft: -57,color:'rgb(253, 181, 40)'}}/>
            </Box>
        </Box>
        <Box style={{paddingLeft:47,margin:'auto 0'}}>
          <Box style={{display:'flex'}}>
            <span style={{fontSize:'1.25rem',fontWeight:'500',color:'rgba(76, 78, 100, 0.87)'}}>22k</span>
            <Box>
            <span style={{fontSize:'0.875rem',fontWeight:'500',color:'rgb(114, 225, 40)',paddingLeft:7,display:'flex',alignItems:'center',paddingTop:'3px'}}>+15%
            <span style={{display:'block'}}><KeyboardArrowDownOutlinedIcon/></span>
            </span>
            </Box>
            </Box>
            
            <Typography style={{fontSize:'0.875rem',fontWeight:'400',color:'rgba(76, 78, 100, 0.68)',letterSpacing:1}}>Total Orders</Typography>
            
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default TotalOrders
