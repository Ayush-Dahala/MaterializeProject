import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import { TextField } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <div style={{display:'flex',alignItems:'center',marginTop:26}}>
      <img src={img6} style={{width:42,height:42,borderRadius:'50%',marginBottom:7,marginLeft:5}}/>
      <TextField id="outlined-basic" label="Search for contacts" variant="outlined" style={{height:65,width:'100%',marginLeft:10,borderRadius:30}} sx={{'& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        borderRadius:37,
        height:42,
        marginTop:1
      },
    }}/>
      </div>
      <Divider />
      <List>
        <h3 style={{color:'rgb(102, 108, 255)',paddingLeft:10}}>Chats</h3>
        {['Felecia Rower', 'Adalberto Granzin'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index==1 ? <img src={img2} style={{width:42,borderRadius:'50%'}}/> : <img src={img1} style={{width:42,borderRadius:'50%'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <h3 style={{color:'rgb(102, 108, 255)',paddingLeft:10}}>Contacts</h3>
      <List>
        {['Joaquina Weisenborn', 'Verla Morgano', 'Margot Henschke', 'Sal Piggee','Miguel Guelff','Mauro Elenbaas','Bridgett Omohundro','Zenia Jacobs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index==0?<img src={img3} style={{width:42,borderRadius:'50%'}}/>:index==1?<img src={img4} style={{width:42,borderRadius:'50%'}}/>:index==2?<img src={img5} style={{width:42,borderRadius:'50%'}}/>:<img src={img1} style={{width:42,borderRadius:'50%'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          
        </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box',width:'23%' }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' ,width:'23%'}
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div style={{height: '65vh',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:'column',width:'60%'}}>
          <div style={{padding:' 48px 58px',boxShadow:'rgb(76 78 100 / 42%) 0px 4px 8px -4px',borderRadius:'50%'}}>
          <ChatBubbleOutlineIcon style={{width: 76,height: 89}}/>
          </div>
          <div style={{marginTop: 33,padding: '8px 23px',borderRadius: 19,boxShadow:'rgb(76 78 100 / 42%) 0px 4px 8px -4px',fontWeight:400,color:'rgba(76, 78, 100, 0.87)'}}>
          <Typography>Start Conversation</Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;