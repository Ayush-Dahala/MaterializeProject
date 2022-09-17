import React from 'react'
import {Box,styled,TextField,Button,Divider, OutlinedInput, InputAdornment, IconButton, InputLabel, FormControl} from '@mui/material'
import logo from '../assets/login Page/logo.png'
import ball from '../assets/login Page/ball.png'
import mainLogo from '../assets/material-ui.svg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'

const Wrapper=styled(Box)`
    display:flex;
`


const ImageSection=styled(Box)(({theme})=>({
    width:'70%',
    margin:'auto',
    paddingTop: 24,
    paddingLeft: 27,
    display:'block',
    [theme.breakpoints.down('lg')]:{
      display:'none'
    }
}))

const Image=styled('img')({
    width:'75%',
    display:'flex',
    margin:'auto',
})

const EmailList=styled(Box)`
    color: rgb(102, 108, 255);
    background:rgba(102, 108, 255, 0.12);
    padding: 1px 18px;
    padding-bottom: 11px;
`

const Input=styled(TextField)`
  margin-top:25px;
  width:90%;
  border-color:transparent
`

const LoginButton=styled(Button)`
  background-color:rgb(102, 108, 255);
  width:90%;
  font-weight:500;
  border-radius:8px;
  box-shadow:rgb(76 78 100 / 42%) 0px 4px 8px -4px;
  margin-top:20px;
  padding:9px;
`

const Heading=styled('h2')({
  fontSize:'1.4933 rem',
  color:'rgba(76, 78, 100, 0.87)',
  fontWeight:600,
  marginRight: 'auto',
  paddingLeft:20
})

const Line=styled(Divider)(({theme})=>({
  display:'block',
  [theme.breakpoints.down('lg')]:{
    display:'none'
  }
}))

const Container=styled(Box)(({theme})=>({
  width:'30%',
  [theme.breakpoints.down('lg')]:{
    width:'80%',
    margin:'auto'
  }
}))

const MainImage=styled('img')({
  height:'40px',
  paddingTop:'31px',
  paddingLeft:'31px'
})

const Login = () => {

    const navigate=useNavigate();

    const [values, setValues] = React.useState({password:'admin',showPassword: false})
    const [admin, setAdmin] = React.useState('admin@materialize.com')

    const Login=()=>{
        navigate('/Ecommerce')
    }

    const handleAdminChange=(e)=>{
      setAdmin(e.target.value)
    }

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <>
      <Box style={{display:'flex',width:'70.54%'}}>
        <Box style={{display:'flex',width:'100%'}}>
        <MainImage src={mainLogo}/> 
        <p style={{display:'flex',alignItems:'center',paddingLeft:16,paddingTop: 6,fontSize:'1.5rem',color:'rgba(76, 78, 100, 0.87)',fontWeight:700}}>Materialize</p>
        </Box>
        <Line orientation="vertical" flexItem/>
        </Box>
      
      <Wrapper>
    <ImageSection>
        <Image src={logo} alt='image'/>
        <Image src={ball} alt='ball' style={{marginTop:'-294px',marginRight:'212px',width:'100%'}}/>
    </ImageSection>
        <Divider orientation="vertical" flexItem></Divider>

      <Container style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Heading style={{lineHeight:0}}>Welcome to Materialize! 👋🏻</Heading>
        <p style={{color:"rgba(76, 78, 100, 0.87)",width:'90%'}}>Please sign-in to your account and start the adventure</p>
        <EmailList style={{borderRadius: 10,width: '87%',fontSize:'0.875rem'}}>
            <p>Admin: <strong>admin@materialize.com </strong>/ Pass:<strong> admin </strong></p>
            <p style={{lineHeight:0}}>Client:<strong> client@materialize.com</strong> / Pass:<strong> client</strong></p>
        </EmailList>
        <Input id="outlined-basic" label="Email" variant="outlined" value={admin} onChange={handleAdminChange} />

        <FormControl sx={{marginTop:3,width:'90%',borderColor:'transparent' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput 
            label="Password"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
          </FormControl>


        <form style={{marginTop:9,width:'90%'}} >
        <input type="checkbox"></input>
        <label style={{color:'rgba(76, 78, 100, 0.87)'}}>Remember Me</label>
        <span style={{float:'right',color:'rgb(102, 108, 255)'}}>Forgot Password?</span>
        </form>
        <LoginButton onClick={Login} variant="contained">Login</LoginButton>
        <p style={{textAlign:'center',width:'90%',color:'rgba(76, 78, 100, 0.68)'}}>New on our platform?<span style={{color:'rgb(102, 108, 255)'}}> Create an account</span></p>
        <Box style={{width:'90%'}}>
        <Divider>
         <div style={{color:"rgba(76, 78, 100, 0.87)"}}>or</div> 
        </Divider>
        </Box>
       
        <Box style={{width:'90%',textAlign:'center',marginTop:50}}>
            <FacebookOutlinedIcon style={{paddingRight:15,color: 'rgb(73, 124, 226)'}}/>
            <TwitterIcon style={{paddingRight:15,color:'rgb(29, 161, 242)'}}/>
            <GitHubIcon style={{paddingRight:15}}/>
            <GoogleIcon style={{color:'rgb(219, 68, 55)'}}/>
          </Box>
      </Container>

    </Wrapper>
    </>
  )
  }

export default Login;
