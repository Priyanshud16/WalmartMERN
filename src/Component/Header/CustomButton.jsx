import { Badge, Box,Button,  Typography } from '@mui/material'
import React, { useState,useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom' 
import { useSelector } from 'react-redux';
//Component
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../Context/DataProvider';
import Profile from './Profile';


function CustomButton() {
  const [open,SetOpen]=useState(false)
  const {Account,setAccount}=useContext(DataContext)
 const {cartItems} =useSelector(state=>state.cart)
  const openDialog=()=>{
    SetOpen(true)
  }
  return (
    <Box style={{display:"flex"}}>
      {
        Account ? <Profile Account={Account} setAccount={setAccount}/>:   <Button onClick={()=>openDialog()} variant='contained' style={{marginLeft:"40px",color:"#2874f0",background:"white",padding:"5px 40px",borderRadius:"2px",fontWeight:"600px"}}>Login</Button>
      }
       
        <Typography style={{marginTop:"8px",marginLeft:"40px"}}>
            More
        </Typography>
        <Link to="/cart" style={{textDecoration:"none",color:"white"}}>
          
        <Box style={{display:"flex",marginTop:"8px",marginLeft:"40px"}}>
        <Badge badgeContent={cartItems?.length} color='secondary'><ShoppingCartIcon/>  </Badge>  <Typography>Cart</Typography>
        </Box>
       
        </Link>
        <LoginDialog open={open} SetOpen={SetOpen}/>
    </Box>
  )
}

export default CustomButton