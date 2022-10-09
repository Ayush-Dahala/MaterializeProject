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
import { Button, Checkbox, TextField } from '@mui/material';
import { Autocomplete } from '@mui/material'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import SendIcon from '@mui/icons-material/Send';
import SourceIcon from '@mui/icons-material/Source';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const invoiceStatus=[
    {label:'none'},
    {label:'Downloaded'},
    {label:'Draft'},
    {label:'Paid'},
    {label:'Past Due'},
    {label:'Partial Payment'}
]

const data=[
    {user:"Jordan Stevenson",userName:"@jstevenson5c",email:"susanna.Lind57@gmail.com",role:"Admin",status:"Paid",logo:logo1,plan:'Enterprise',id:'4987',issuedDate:'13 Oct 2022',Balance:'$724',total:'$3428'},
    {user:"Robert Crawford",userName:"@rcrawford1d",email:"estelle.Bailey10@gmail.com",role:"Editor",status:"Pending",logo:logo2,plan:'Team',id:'4986',issuedDate:'15 Oct 2022',Balance:'$729',total:'$9428'},
    {user:"Lydia Reese",userName:"@lreese3b",email:"milo86@hotmail.com",role:"Author",status:"Paid",logo:logo3,plan:'Enterprise',id:'4980',issuedDate:'18 Oct 2022',Balance:'$424',total:'$34286'},
    {user:"Richard Sims",userName:"@rsims6f",email:"lonnie35@hotmail.com",role:"Editor",status:"Paid",logo:logo4,plan:'Enterprise',id:'4990',issuedDate:'19 Oct 2022',Balance:'$754',total:'$7828'},
    {user:"Lucile Young",userName:"@lyoung4a",email:"ahmad_Collins@yahoo.com",role:"Maintainer",status:"Pending",logo:logo5,plan:'Company',id:'4987',issuedDate:'10 Oct 2022',Balance:'$824',total:'$9028'},
    {user:"Francis Frank",userName:"@ffrank7e",email:"tillman.Gleason68@hotmail.com",role:"Editor",status:"Pending",logo:logo6,plan:'Team',id:'4980',issuedDate:'15 Oct 2022',Balance:'$784',total:'$3498'},
    {user:"Phoebe Patterson",userName:"@ppatterson2g",email:"otho21@gmail.com",role:"Subscriber",status:"Inactive",logo:logo7,plan:'Company',id:'4990',issuedDate:'20 Oct 2022',Balance:'$324',total:'$4428'},
]

const TableList = () => {
  return (
      <TableContainer component={Paper} style={{borderRadius:'10px',border:'1px solid rgba(76, 78, 100, 0.2)'}}>
        <div style={{paddingBottom:10,paddingLeft:5,display:'flex',alignItems:'center',paddingTop:10,borderBottom:'1px solid rgba(76, 78, 100, 0.2)'}}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={invoiceStatus}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Actions" />}
            style={{paddingRight:18,width:150}}/>

        <div style={{marginLeft:'auto',display:'flex',alignItems:'center'}}>
        <TextField id="outlined-basic" label="Search Invoice" variant="outlined" style={{paddingRight: 20}} sx={{'& #outlined-basic':{
            height:'0.9em',
            padding:'19px'
        }}}/>
        <Button variant="contained" style={{marginRight:13,background:'rgb(102, 108, 255)'}}>Create Invoice</Button>
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
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>#</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}><TrendingUpIcon/></TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Client</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Total</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Issued Date</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>Balance</TableCell>
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

            <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>{data.id}</TableCell>

            <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>
                <div>
                    {data.id=='4987'?
                    <CheckOutlinedIcon style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',borderRadius:'50%'}}/>:data.id=='4980'?<ArrowDownwardOutlinedIcon style={{color:'rgb(38, 198, 249)',background:'rgba(38, 198, 249, 0.12)',borderRadius:'50%'}}/>:data.id=="4986"?<SendIcon style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',borderRadius:'50%'}}/>:<SourceIcon style={{color:'rgb(102, 108, 255)',background:'rgba(102, 108, 255, 0.12)',borderRadius:'50%'}}/>
                       
                    }
                </div>
            </TableCell>

              <TableCell component="th" scope="row" style={{display:'flex',paddingTop: 1,paddingBottom: 1,alignItems:'center'}}>
                <img src={data.logo} style={{height:36,borderRadius:42}}/>
                <div style={{paddingLeft:8}} >
                <p style={{color:'rgba(76, 78, 100, 0.87)',fontSize:'0.875rem',fontWeight:'500'}}>{data.user}</p>
                <p style={{lineHeight:0,color:'rgba(76, 78, 100, 0.68)',fontSize:'0.75rem',fontWeight:400}}>{data.userName}</p>
                </div>
              </TableCell>
              
             

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'1rem',fontWeight:'400'}}><span style={{paddingLeft:7}}>{data.total}</span></TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>{data.issuedDate}</TableCell>

              <TableCell>{data.status=="Pending"?<span style={{color:'rgb(253, 181, 40)',background:'rgba(253, 181, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:data.status=="Active"?<span style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:<span style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',padding:5,borderRadius:10}}>{data.Balance}</span>}</TableCell>

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

      
  )
}

export default TableList
