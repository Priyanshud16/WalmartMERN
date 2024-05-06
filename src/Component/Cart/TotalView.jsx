import { Box, Container, Typography, styled } from '@mui/material'
import React,{useEffect, useState} from 'react'

const Header=styled(Box)`
padding:15px 24px;
border-bottom:1px solid #f0f0f0

`
const Heading=styled(Typography)`
color:#878787
`
const ContainerType=styled(Box)`
padding:15px 24px;
&>p{
  margin-bottom:20px;
  font-size:14px
}
`
const Price=styled(Box)`
float:right
`

function TotalView({cartItems}) {
  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState(0)

  const TotalAmount=()=>{
    let price=0;
    cartItems.map((item)=>(
      price+=item.price
    ))
    setPrice(price)
  }

  useEffect(()=>{
    TotalAmount()
  },[cartItems])
  return (
   <Box>
    <Header>
      <Heading>Price Details</Heading>
    </Header>
    <ContainerType>
      <Typography>Price ({cartItems ?.length} Item)
      <Price component='span'>₹{price}</Price>
      </Typography>

      <Typography>Discount 
      <Price component='span'>-₹100 </Price>
      </Typography>

      <Typography>Delivery Charges 
      <Price component='span'>₹40 </Price>
      </Typography>

      <Typography variant="h6" style={{fontWeight:600}}>Total Amount
      <Price component='span'>₹{price-100+40} </Price>
      </Typography>
      <Typography>You Will Save ₹100 on this Order </Typography>
    </ContainerType>
   </Box>
  )
}

export default TotalView