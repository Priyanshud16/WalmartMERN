import React from 'react'
import {AppBar,Toolbar,Typography,Box,styled} from '@mui/material'
import AccordionUsage from './NavbarAccordian'
import SearchBar from './searchBar'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

const Component=styled(Link)`
margin-left:12px;
line-height:0;
text-decoration:none;
color:white
`
function Header() {
    const LogoUrl="client/src/assets/walmart_logo@logotypus.com.png"
  return (
    <div>
        <AppBar style={{height:"80px"}}>
            <Toolbar>
                <Component to="/" style={{width:"180px",marginBottom:"20px",height:"100px"}}>
                <Typography variant='h2' component='h2' style={{fontWeight:"bolder",fontSize:"45px",width:"75px",marginTop:"30px",fontStyle:"italic"}}>Walmart</Typography>
                </Component>
                <AccordionUsage/>

                <SearchBar/>

                <Box>
                    <CustomButton/>
                </Box>
            </Toolbar>
          
        </AppBar>
      
    </div>
  )
}

export default Header