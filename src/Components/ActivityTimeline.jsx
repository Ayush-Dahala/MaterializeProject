import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import styled from 'styled-components';
import image from '../assets/ActivityTimeline.png'

const Dot=styled.span`
width: 1px;
height: 1px;
display: flex;
align-self: baseline;
border-style: solid;
border-width: 2px;
padding: 4px;
border-radius: 50%;
margin: 11.5px 0px;
border-color: transparent;
color: rgb(255, 255, 255);
background-color: rgb(255, 77, 73);
box-shadow: rgb(255 77 73 / 12%) 0px 0px 0px 3px;
`

const Line=styled.span`
    background:rgba(76, 78, 100, 0.12);
    width: 1.5px;
    height: 80px;
    display: flex;
    color:rgba(76, 78, 100, 0.87)
`
const LineWrapper=styled.div`
    display: flex;
    justify-content: center;
`

const ActivityTimeline = () => {
  return (
    <div style={{border:'1px solid',borderRadius:10,borderColor:'rgba(76, 78, 100, 0.28)',}}>
        <div style={{display:'flex' ,padding:'0 24px'}}>
            <h2 style={{fontSize:'1.25rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:500}}>Activity Timeline</h2>
            <h1 style={{display:'flex',alignItems:'center',marginLeft:'auto',color:'rgba(76, 78, 100, 0.87)'}}><MoreVertIcon/></h1>
        </div>
        <div>
            <ul style={{listStyle:'none'}}>
                <li style={{display:'flex'}}>
                    <div>
                        <Dot></Dot>
                        <LineWrapper>
                        <Line></Line>
                        </LineWrapper>
                    </div>
                    <div style={{display:'flex',width:'100%'}}>
                        <div style={{paddingLeft: '28px', lineHeight: 0,width:'100%'}}>
                            <div style={{display:'flex'}}>
                                <h4 style={{fontSize:'1rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>8 Invoices have been paid</h4>
                                <div style={{marginLeft:'auto'}}>
                                <h5 style={{paddingRight:42,fontSize:'0.75rem',fontWeight:'400',color:'rgba(76, 78, 100, 0.38)'}}>Wednesday</h5>
                                </div>
                            </div>
                            <div>
                                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>Invoices have been paid to the company</h4>
                                <span style={{display:'flex',alignItems:'center',marginTop:'-11px'}}><PictureAsPdfIcon style={{color:'#cb0606',width:26,height:30}}/>
                                <h5 style={{paddingLeft:8,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:600}}>bookingCard.pdf</h5>
                                </span>
                            </div>
                        </div>

                    </div>
                </li>

                <li style={{display:'flex'}}>
                    <div>
                        <Dot style={{backgroundColor:'rgb(102, 108, 255)',color:'rgb(255, 255, 255)'}}></Dot>
                        <LineWrapper>
                        <Line></Line>
                        </LineWrapper>
                    </div>
                    <div style={{display:'flex',width:'100%'}}>
                        <div style={{paddingLeft: '28px', lineHeight: 0,width:'100%'}}>
                            <div style={{display:'flex'}}>
                                <h4 style={{fontSize:'1rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Create a new project for client😎</h4>
                                <div style={{marginLeft:'auto'}}>
                                <h5 style={{paddingRight:42,fontSize:'0.75rem',fontWeight:'400',color:'rgba(76, 78, 100, 0.38)'}}>April, 18</h5>
                                </div>
                            </div>
                            <div>
                                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>Invoices have been paid to the company</h4>
                                <span style={{display:'flex',alignItems:'center',marginTop:'-11px'}}><img src={image} style={{width:26,height:25,borderRadius:'50%'}}/>
                                <h5 style={{paddingLeft:8,fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:600}}>John Doe (Client)</h5>
                                </span>
                            </div>
                        </div>

                    </div>
                </li>

                <li style={{display:'flex'}}>
                    <div>
                        <Dot style={{backgroundColor:'rgb(38, 198, 249)'}}></Dot>
                        <LineWrapper>
                        <Line style={{height:36}}></Line>
                        </LineWrapper>
                    </div>
                    <div style={{display:'flex',width:'100%'}}>
                        <div style={{paddingLeft: '28px', lineHeight: 0,width:'100%'}}>
                            <div style={{display:'flex'}}>
                                <h4 style={{fontSize:'1rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Order #34775 from September</h4>
                                <div style={{marginLeft:'auto'}}>
                                <h5 style={{paddingRight:42,fontSize:'0.75rem',fontWeight:'400',color:'rgba(76, 78, 100, 0.38)'}}>January, 10</h5>
                                </div>
                            </div>
                            <div>
                                <h4 style={{fontSize:'0.875rem',color:'rgba(76, 78, 100, 0.68)',fontWeight:400}}>Invoices have been paid to the company</h4>
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default ActivityTimeline
