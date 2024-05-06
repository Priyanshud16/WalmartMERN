import React,{useState,useContext, useEffect} from 'react'
import {Box, Dialog,TextField ,Button, Typography,styled} from "@mui/material"
import { authenticateSignup } from '../../Service/Api'
import  { DataContext } from '../../Context/DataProvider'
import axios from 'axios'

const Component=styled(Box)`
height:70vh;
width:90vh;
`
const Image=styled(Box)`
background:#2874f0 url(https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png) center 75% no-repeat;
height:100%;
width:40%;

&::after{
    content:"Walmart";
position:relative;
top:250px;
left:80px;
font-size:30px;
font-weight:bolder;
}
`
const Wrapper=styled(Box)`
display:flex,
flex-direction:column;
padding:25px 35px;
flex:1;
&>div,&>button ,&>p {
    margin-top:20px
}

`

const LoginButton=styled(Button)`
text-transform:none;
background:#FFCE4D;
width:250px;
height:48px;
border-radius:2px
`

const RequestOTP=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
width:250px;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%)
`
const Text=styled(Typography)`
font-size:12px;
color:#878787

`

const CreateAccount=styled(Typography)`
font-size:14px;
margin-left:10px;
color:#2874f0;
font-weight:600;
cursor:pointer

`

const AccountInitialValue={
    login:{
        view:'login',
        heading:"Login",
        SubHeading:"Get access to your Order,Wishlist and Recommendations"
    },
    signup:{
view:'signup',
heading:"Sign Up",
SubHeading:"Signup with your mobile to get started"
    }
}

const SignupInitialValue={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}

const LoginInitialValue={
    username:"",
    password:""
}
function LoginDialog({open,SetOpen}) {
const [account,toogleAccount]=useState(AccountInitialValue.login)
const [signup,SetSignup]=useState(SignupInitialValue)
const {Account,setAccount}=useContext(DataContext)
const [login,setLogin]=useState(LoginInitialValue)

    const HandleClose=()=>{
        SetOpen(false)
        toogleAccount(AccountInitialValue.login)
    }
const OnInputChange=(e)=>{
    const { name, value } = e.target;
SetSignup({...signup,[name]:value})



}
    const toggleSignup=()=>{
        toogleAccount(AccountInitialValue.signup)
    }

    const SignupUser = async (e) => {
        e.preventDefault();
        try {
            const { username, email, password, firstname, lastname, phone } = signup; // Access variables from the signup state
            const data = await fetch("https://walmartbackend-1.onrender.com/user/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    firstname,
                    lastname,
                    phone
                })
            });
            const Res = await data.json();
            console.log(Res);
        } catch (error) {
            console.error("Error occurred while signing up:", error);
        }
    }
    

    const onValueChange=(e)=>{
        const { name, value } = e.target;
setLogin({...login,[name]:value})

    }

   
    const loginUser= async()=>{
        console.log(login);
        const {username,password}=login
        try {
            let data=await axios.post("https://walmartbackend-1.onrender.com/user/login",{username,password})
            console.log(data);
        } catch (error) {
            
        }
    }
  return (
    <Dialog open={open} onClose={HandleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
            <Box style={{display:"flex",height:"100%"}}>
            <Image>
                <Typography variant="h5" style={{marginTop:"30px",marginLeft:"50px",color:"white",fontWeight:"bolder"}}>{account.heading}</Typography>
               
                <Typography style={{marginTop:"50px",marginLeft:"50px",fontWeight:"bolder",color:"white"}}>{account.SubHeading}</Typography>
            </Image>

            {
                 account.view==='login' ? 
                <Wrapper>
                <TextField style={{width:"100%"}} onChange={onValueChange} name='username' variant="standard" label="Enter Your Email"/>
               <br />
                <TextField style={{width:"100%"}} onChange={onValueChange} name='password' variant="standard" label="Enter Your Password"/>
                <Text>By Continue, you agree to Walmart terms of use and Privacy Policy</Text>
                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                <Typography style={{marginLeft:"110px"}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={()=>toggleSignup()}>New to Walmart? Create an account</CreateAccount>
            </Wrapper>
            :
             <Wrapper>
             <TextField style={{width:"100%"}} onChange={OnInputChange} name="firstname" variant="standard" label="Enter Your Firstname"/>
            <br />
             <TextField style={{width:"100%"}}  onChange={OnInputChange} name="lastname" variant="standard" label="Enter Your Lastname"/>
             <br />
             <TextField style={{width:"100%"}}  onChange={OnInputChange} name="username" variant="standard" label="Enter Your Username"/>
             <br />
             <TextField style={{width:"100%"}}  onChange={OnInputChange} name="email" variant="standard" label="Enter Your Email"/>
             <br />
             <TextField style={{width:"100%"}}  onChange={OnInputChange} name="password" variant="standard" label="Enter Your Password"/>
             <br />
             <TextField style={{width:"100%"}}  onChange={OnInputChange} name="phone" variant="standard" label="Enter Your Phone Number"/>
            
            
             <LoginButton onClick={SignupUser}>Sign Up</LoginButton>
           
         </Wrapper>
            }
           
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog