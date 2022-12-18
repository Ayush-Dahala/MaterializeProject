import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export default function TemporaryDrawer({getData}) {
    const[user,setUser]=useState('')
    const[userName,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[role,setRole]=useState('')
    const[status,setStatus]=useState('')
    const[plan,setPlan]=useState('')

    const addData=async()=>{
        const data={"user":user,"userName":userName,"email":email,"role":role,"status":status,"plan":plan}
        let result=await axios.post('http://localhost:8000/api/v1/tableData',data);
        console.log(result)
        getData();
    }

  const [state, setState] = React.useState({
    addUser: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <TextField variant="outlined" placeholder="Enter User" style={{marginBottom:20,marginLeft:15}} value={user} onChange={e=>setUser(e.target.value)}/>
        <TextField variant="outlined" placeholder="Enter UserName" style={{marginBottom:20,marginLeft:15}} value={userName} onChange={e=>setUserName(e.target.value)}/>
        <TextField variant="outlined" placeholder="Enter Email" style={{marginBottom:20,marginLeft:15}} value={email} onChange={e=>setEmail(e.target.value)}/>
        <TextField variant="outlined" placeholder="Enter Role" style={{marginBottom:20,marginLeft:15}} value={role} onChange={e=>setRole(e.target.value)}/>
        <TextField variant="outlined" placeholder="Enter Status" style={{marginBottom:20,marginLeft:15}} value={status} onChange={e=>setStatus(e.target.value)}/>
        <TextField variant="outlined" placeholder="Enter Plan" style={{marginBottom:20,marginLeft:15}} value={plan} onChange={e=>setPlan(e.target.value)}/>
        <Button variant="contained" style={{display:'flex',margin:'auto',width:'90%'}} onClick={addData}>Add Data</Button>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true,addData)} variant="contained" style={{marginRight:13,background:'rgb(102, 108, 255)'}}>Add User</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}