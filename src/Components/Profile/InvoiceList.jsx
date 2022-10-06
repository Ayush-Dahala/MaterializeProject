import React from 'react'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import SendIcon from '@mui/icons-material/Send';
import SourceIcon from '@mui/icons-material/Source';


const data=[
    {user:"#4987",email:"122/240",role:"$3428",status:"13 May 2022"},
    {user:"#4986",email:"9/56",role:"$5219",status:"17 May 2022"},
    {user:"#4987",email:"290/320",role:"$3719",status:"19 May 2022"},
    {user:"#4980",email:"7/63",role:"$7856",status:"14 May 2022"},
    {user:"#4987",email:"120/860",role:"$9076",status:"12 May 2022"},
    {user:"#4990",email:"99/109",role:"$8967",status:"11 May 2022"},
    {user:"#4980",email:"98/110",role:"$7679",status:"10 May 2022"},
]

const InvoiceList = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div>
      <div>
     

        <TableContainer component={Paper} style={{borderRadius:'10px'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <h3 style={{textAlign:'left',color:'rgba(76, 78, 100, 0.87)'}}>Invoice List</h3>
            </TableRow>
          <TableRow style={{background:'rgb(245 245 247)'}}>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}># ID</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}><ArrowUpwardIcon style={{paddingTop:6}}/></TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Total</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Issued date</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>action</TableCell>          
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:'flex',paddingTop: 1,alignItems:'center'}}>
                
                <div style={{paddingLeft:8}} >
                <p style={{color:'rgba(76, 78, 100, 0.87)',fontSize:'0.875rem',fontWeight:'500',color:'rgb(102, 108, 255)'}}>{data.user}</p>
                </div>
              </TableCell>
              
              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>
                <div>
                    {data.user=='#4987'?
                    <CheckOutlinedIcon style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',borderRadius:'50%'}}/>:data.user=='#4980'?<ArrowDownwardOutlinedIcon style={{color:'rgb(38, 198, 249)',background:'rgba(38, 198, 249, 0.12)',borderRadius:'50%'}}/>:data.user=="#4986"?<SendIcon style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',borderRadius:'50%'}}/>:<SourceIcon style={{color:'rgb(102, 108, 255)',background:'rgba(102, 108, 255, 0.12)',borderRadius:'50%'}}/>
                       
                    }
                </div>
              </TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'1rem',fontWeight:'400'}}>{data.role}</TableCell>

              <TableCell>{data.status=="Pending"?<span style={{color:'rgb(253, 181, 40)',background:'rgba(253, 181, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:data.status=="Active"?<span style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:<span style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>}</TableCell>

              <TableCell style={{padding:0}}>
                    <DeleteOutlineIcon style={{paddingRight:5,color:'rgba(76, 78, 100, 0.54)'}}/>
                    <RemoveRedEyeIcon style={{paddingRight:5,color:'rgba(76, 78, 100, 0.54)'}}/>
                    <MoreVertOutlinedIcon style={{color:'rgba(76, 78, 100, 0.54)'}}/>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      
      </div>
    </div>
  )
}

export default InvoiceList

