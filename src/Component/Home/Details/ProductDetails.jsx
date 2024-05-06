import React from 'react'
import {Box,Table,TableBody,TableCell,TableRow,Typography} from  '@mui/material'
function ProductDetails({products}) {
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
  return (
    <>
     <Typography style={{marginTop:5,color:"#878787",fontSize:14}}>8 Ratings & 1 Review </Typography>
          <Typography>
            <Box component="span" style={{fontSize:48}}>
            ₹ {products.price}
            </Box>
            <br />
            <Box component="span" style={{color:"#878787"}}>
               Rating {products.rating.rate}/10
            </Box>
          </Typography>
          <Typography>Available offers</Typography>
          <Box>
            <Typography>Get extra 20% off upto  ₹50 on 1 item(s) T&C </Typography>
            <Typography>Get extra 13% off (price inclusive of discount) T&C </Typography>
            <Typography>Sign up for Walmart Pay Later and get Walmart Gift Card worth ₹100 *know More </Typography>
          </Box>
          <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Delivery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>Warranty</TableCell>
                    <TableCell style={{fontWeight:600}}>No Warranty</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell style={{fontWeight:600}}>{products.description}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
    </>
  )
}

export default ProductDetails