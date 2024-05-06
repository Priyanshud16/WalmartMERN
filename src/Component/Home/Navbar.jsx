import { Box } from '@mui/material'
import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <Box id="Navbar-Container">
        <button className='NavbarBtnOne'>Department</button>
        <button className='NavbarBtnOne'>Services</button>
        <button className='NavbarBtnTwo'>Deals</button>
        <button className='NavbarBtnTwo'>Grocery Essentials</button>
        <button className='NavbarBtnTwo'>Mother's Day</button>
        <button className='NavbarBtnTwo'>Teacher Appreciation</button>
        <button className='NavbarBtnTwo'>National Per Month</button>
        <button className='NavbarBtnTwo'>Home</button>
        <button className='NavbarBtnTwo'>Faishon</button>
        <button className='NavbarBtnTwo'>Outdoor fun</button>
        <button className='NavbarBtnTwo'>New Toys</button>
        <button className='NavbarBtnTwo'>Registry</button>
        <button className='NavbarBtnTwo'>One Debit</button>

    </Box>
  )
}

export default Navbar