import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import logo4 from './logo4.png'
import logo5 from './logo5.png'
import logo6 from './logo6.png'
import logo7 from './logo7.png'
import { LinearProgress } from "@mui/material";
import LaptopIcon from '@mui/icons-material/Laptop';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';

const data=[
    {user:"BGC eCommerce Appordan Stevenson",userName:"React Project",email:"122/240",value:"78",role:"78%",status:"18:42",logo:logo1,background:'rgb(114, 225, 40)',color:'rgba(114, 225, 40, 0.12)'},
    {user:"Falcon Logo Design",userName:"Figma Project",email:"9/56",value:"18",role:"18%",status:"20:42",logo:logo2,background:'rgb(255, 77, 73)',color:'rgba(255, 77, 73, 0.12)'},
    {user:"Dashboard Design",userName:"VueJs Project",email:"290/320",value:"62",role:"62%",status:"120:87",logo:logo3,background:'rgb(102, 108, 255)',color:'rgba(102, 108, 255, 0.12)'},
    {user:"Foodista Mobile App",userName:"Xamarin Project",email:"7/63",value:"8",role:"8%",status:"89:19",logo:logo4,background:'rgb(255, 77, 73)',color:'rgba(255, 77, 73, 0.12)'},
    {user:"Dojo React Project",userName:"Python Project",email:"120/860",value:"49",role:"49%",status:"230:10",logo:logo5,background:'rgb(253, 181, 40)',color:'rgba(253, 181, 40, 0.12)'},
    {user:"Blockchain Website",userName:"Sketch Project",email:"99/109",value:"92",role:"92%",status:"342:41",logo:logo6,background:'rgb(114, 225, 40)',color:'rgba(114, 225, 40, 0.12)'},
    {user:"Hoffman Website",userName:"HTML Project",email:"98/110",value:"88",role:"88%",status:"12:45",logo:logo7,background:'rgb(114, 225, 40)',color:'rgba(114, 225, 40, 0.12)'},
]

const ProjectList = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div>
      <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<PermIdentityOutlinedIcon/>} iconPosition="start"  label="Overview" />
        <Tab icon={<LockOutlinedIcon/>} iconPosition="start" label="Security" />
        <Tab icon={<BookmarkBorderOutlinedIcon/>} iconPosition="start"  label="Billing & plan" />
        <Tab icon={<NotificationsOutlinedIcon/>} iconPosition="start" label="Notification" />
        <Tab icon={<CloudQueueIcon/>} iconPosition="start"  label="Connection" />
        </Tabs>

        <TableContainer component={Paper} style={{borderRadius:'10px'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <h3 style={{textAlign:'left',color:'rgba(76, 78, 100, 0.87)'}}>Project List</h3>
            </TableRow>
          <TableRow style={{background:'rgb(245 245 247)'}}>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>PROJECT</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>TOTAL TASK</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>PROGRESS</TableCell>
            <TableCell style={{fontSize:"0.75rem",color:'rgba(76, 78, 100, 0.87)',fontWeight:'600'}}>HOURS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:'flex',paddingTop: 1,alignItems:'center'}}>
                <img src={data.logo} style={{height:36,borderRadius:42}}/>
                <div style={{paddingLeft:8}} >
                <p style={{color:'rgba(76, 78, 100, 0.87)',fontSize:'0.875rem',fontWeight:'500'}}>{data.user}</p>
                <p style={{lineHeight:0,color:'rgba(76, 78, 100, 0.68)',fontSize:'0.75rem',fontWeight:400}}>{data.userName}</p>
                </div>
              </TableCell>
              
              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'0.875rem',fontWeight:400}}>{data.email}</TableCell>

              <TableCell style={{color:'rgba(76, 78, 100, 0.68)',fontSize:'1rem',fontWeight:'400'}}><span style={{paddingLeft:7}}>{data.role}</span>
              <LinearProgress
            variant="determinate"
            value={data.value}
            sx={{
                backgroundColor: `${data.color}`,
                width:'90%',
                margin:'auto',
                height:'8px',
                borderRadius:'10px',
                "& .MuiLinearProgress-bar": {
                backgroundColor: `${data.background}`
                  }
                }}/>
            </TableCell>

              <TableCell>{data.status=="Pending"?<span style={{color:'rgb(253, 181, 40)',background:'rgba(253, 181, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:data.status=="Active"?<span style={{color:'rgb(114, 225, 40)',background:'rgba(114, 225, 40, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>:<span style={{color:'rgb(109, 120, 141)',background:'rgba(109, 120, 141, 0.12)',padding:5,borderRadius:10}}>{data.status}</span>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      
      </div>
    </div>
  )
}

export default ProjectList
