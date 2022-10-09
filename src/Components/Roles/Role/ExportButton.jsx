import React from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import { styled } from '@mui/material';

const Wrapper=styled('div')({
    display:'flex',
    alignItems:'center',
    border:'1px solid rgba(76, 78, 100, 0.2)',
    justifyContent:'center',
    borderRadius: 10,
    width: 130,
    height: 33,
    color:'rgb(109, 120, 141)'
})

const ExportButton = () => {
  return (
    <Wrapper >
      <IosShareIcon style={{paddingRight:5}}/>
      <h4 style={{fontWeight:400}}>Export</h4>
    </Wrapper>
  )
}

export default ExportButton