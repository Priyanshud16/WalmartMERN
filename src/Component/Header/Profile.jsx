import { Box, Typography,Menu,MenuItem,styled } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component=styled(Menu)`
margin-top:5px;
`

const Logout=styled(Typography)`
font-size:14px;
margin-left:20px
`
function Profile({Account,setAccount}) {
const [open,setOpen]=useState(false)
    const HandleClick=(event)=>{
setOpen(event.currentTarget)
    }

    const HandleClose=()=>{
        setOpen(false)
    }

    const Logout2=()=>{
       setAccount('')
    }
  return (
    <>
    <Box onClick={HandleClick}>
    <Typography  style={{marginLeft:"40px",color:"#2874f0",background:"white",padding:"5px 40px",borderRadius:"2px",fontWeight:"600px",cursor:"pointer"}}>{Account}</Typography>
    </Box>
      <Component
       
        anchorEl={open}
        open={Boolean(open)}
        onClose={HandleClose}
       
      >
        <MenuItem onClick={()=>{HandleClose();Logout2()}}>
            <PowerSettingsNewIcon color='primary' fontSize="small"/>
            <Logout>Logout</Logout>
        </MenuItem>
       
      </Component>
    </>
  )
}

export default Profile