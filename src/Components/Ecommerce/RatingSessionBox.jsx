import { Box,styled } from '@mui/material'
import React from 'react'
import logo1 from '../../assets/RatingSession/logo1.png'

const Container=styled(Box)`
    display:flex;
    padding-top:8px;
`

const Text=styled("h3")({
    color: 'rgba(76, 78, 100, 0.87)',
    fontWeight: 600,
    fontSize:'1 rem',
    lineHeight:0
})


 const RatingSessionBox = ({heading,year,price,discount,image,backgroundColor,fontColor,discountColor}) => {
  return (
    <Box style={{border:'1px solid',borderRadius:'14px',border:'1px solid rgba(76, 78, 100, 0.12'}}>
    <Container>
      <Box style={{width:'50%',paddingLeft:23}}>
        <Text>{heading}</Text>
        <span style={{color:`${fontColor}`, background:`${backgroundColor}`,fontSize: '0.75rem', padding: 4,borderRadius: 10}}>{year}</span>
        <br/>
        <Box style={{display:'flex',alignItems:'center'}}>
        <p style={{fontSize:'1.4993rem',fontWeight:600,color:'rgba(76, 78, 100, 0.87)'}}>{price}</p>
        <p style={{color:`${discountColor}`,fontSize:'0.75rem',paddingLeft:6}}>{discount}</p>
        </Box>
        </Box>
      <Box style={{widht:'50%',marginLeft:'auto',paddingRight:36}}>
        <img style={{height:134}} src={image} alt="logo"/>
      </Box>
    </Container>
    </Box>
  )
}

export default RatingSessionBox
