import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LaptopIcon from '@mui/icons-material/Laptop';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Button, Checkbox, TextField } from '@mui/material';
import ExportButton from '../List/ExportButton';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import TemporaryDrawer from './InputField';

const Product = () => {

  const[data,setData]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    let {data}=await axios.get('http://localhost:8000/api/v1/tableData');
    setData(data.result.data);
  }

  const deleteInfo=async(id)=>{
    console.log(id);
    let deleteData=await axios.delete(`http://localhost:8000/api/v1/tableData/${id}`)
    getData(); 
  }
  
  return (
    <>
    <TableContainer component={Paper} style={{borderRadius:'10px',border:'1px solid rgba(76, 78, 100, 0.2)'}}>
        <div style={{paddingBottom:10,paddingLeft:5,display:'flex',alignItems:'center',paddingTop:10,borderBottom:'1px solid rgba(76, 78, 100, 0.2)'}}>
        <ExportButton/>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center'}}>
        <TextField id="outlined-basic" label="Search User" variant="outlined" style={{paddingRight: 20}} sx={{'& #outlined-basic':{
            height:'0.9em',
            padding:'19px'
        }}}/>
        <TemporaryDrawer getData={getData}/>
        </div>

        </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:'rgb(245 245 247)'}}>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600',padding:0}}><Checkbox
            color="primary"
            // checked={isItemSelected}
            inputProps={{}}
            style={{marginLeft:5}}/>
            </TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>USER</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>EMAIL</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>ROLE</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Plan</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>STATUS</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    // checked={isItemSelected}
                    inputProps={{}}/>
            </TableCell>

              <TableCell component="th" scope="row" style={{display:'flex',paddingTop: 1,paddingBottom: 1,alignItems:'center'}}>
                <img src={data.logo} style={{height:36,borderRadius:42}}/>
                <div style={{paddingLeft:8}} >
                <p style={{color:'rgba(76, 78, 100, 0.87)',fontSize:'0.875rem',fontWeight:'500'}}>{data.user}</p>
                <p style={{lineHeight:0,color:'rgba(76, 78, 100, 0.68)',fontSize:'0.75rem',fontWeight:400}}>{data.userName}</p>
                </div>
              </TableCell>
              
              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>{data.email}</TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'1rem',fontWeight:'400'}}>{data.role=="Admin"?<LaptopIcon style={{color:'red',float:'left'}}/>:data.role=="Editor"?<EditOutlinedIcon style={{color:'rgb(38, 198, 249)',float:'left'}}/>:data.role=="Author"?<PsychologyIcon style={{color:'rgb(253, 181, 40)',float:'left'}}/>:data.role=="Maintainer"?<DataSaverOffIcon style={{color:'rgb(114, 225, 40)',float:'left'}}/>:<PermIdentityOutlinedIcon style={{color:'rgb(102, 108, 255)',float:'left'}}/>}<span style={{paddingLeft:7}}>{data.role}</span></TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>{data.plan}</TableCell>

              <TableCell>{data.status=="Pending"?<span style={{color:'rgb(253, 181, 40)',background:'rgba(253, 181, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:data.status=="Active"?<span style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:<span style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>}</TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)'}}><DeleteIcon onClick={()=>deleteInfo(data._id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Product
