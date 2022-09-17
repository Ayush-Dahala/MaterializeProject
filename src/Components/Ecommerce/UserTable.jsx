import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo1 from '../../assets/User Table/1.png'
import logo2 from '../../assets/User Table/2.png'
import logo3 from '../../assets/User Table/3.png'
import logo4 from '../../assets/User Table/4.png'
import logo5 from '../../assets/User Table/5.png'
import logo6 from '../../assets/User Table/6.png'
import logo7 from '../../assets/User Table/7.png'
import LaptopIcon from '@mui/icons-material/Laptop';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';


const data=[
    {user:"Jordan Stevenson",userName:"@jstevenson5c",email:"susanna.Lind57@gmail.com",role:"Admin",status:"Pending",logo:logo1},
    {user:"Robert Crawford",userName:"@rcrawford1d",email:"estelle.Bailey10@gmail.com",role:"Editor",status:"Active",logo:logo2},
    {user:"Lydia Reese",userName:"@lreese3b",email:"milo86@hotmail.com",role:"Author",status:"Inactive",logo:logo3},
    {user:"Richard Sims",userName:"@rsims6f",email:"lonnie35@hotmail.com",role:"Editor",status:"Pending",logo:logo4},
    {user:"Lucile Young",userName:"@lyoung4a",email:"ahmad_Collins@yahoo.com",role:"Maintainer",status:"Active",logo:logo5},
    {user:"Francis Frank",userName:"@ffrank7e",email:"tillman.Gleason68@hotmail.com",role:"Editor",status:"Pending",logo:logo6},
    {user:"Phoebe Patterson",userName:"@ppatterson2g",email:"otho21@gmail.com",role:"Subscriber",status:"Inactive",logo:logo7},
]

const UserTable = () => {
  return (
    <TableContainer component={Paper} style={{borderRadius:'10px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:'rgb(245 245 247)'}}>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>USER</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>EMAIL</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>ROLE</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:'flex',paddingTop: 1,paddingBottom: 1,alignItems:'center'}}>
                <img src={data.logo} style={{height:36,borderRadius:42}}/>
                <div style={{paddingLeft:8}} >
                <p style={{color:'rgba(76, 78, 100, 0.87)',fontSize:'0.875rem',fontWeight:'500'}}>{data.user}</p>
                <p style={{lineHeight:0,color:'rgba(76, 78, 100, 0.68)',fontSize:'0.75rem',fontWeight:400}}>{data.userName}</p>
                </div>
              </TableCell>
              
              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>{data.email}</TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'1rem',fontWeight:'400'}}>{data.role=="Admin"?<LaptopIcon style={{color:'red',float:'left'}}/>:data.role=="Editor"?<EditOutlinedIcon style={{color:'rgb(38, 198, 249)',float:'left'}}/>:data.role=="Author"?<PsychologyIcon style={{color:'rgb(253, 181, 40)',float:'left'}}/>:data.role=="Maintainer"?<DataSaverOffIcon style={{color:'rgb(114, 225, 40)',float:'left'}}/>:<PermIdentityOutlinedIcon style={{color:'rgb(102, 108, 255)',float:'left'}}/>}<span style={{paddingLeft:7}}>{data.role}</span></TableCell>

              <TableCell>{data.status=="Pending"?<span style={{color:'rgb(253, 181, 40)',background:'rgba(253, 181, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:data.status=="Active"?<span style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:<span style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      
  )
}

export default UserTable
