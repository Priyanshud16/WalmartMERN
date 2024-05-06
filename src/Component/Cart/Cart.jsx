import { Box, Grid, Typography,styled,Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container=styled(Grid)`
padding:30px 135px
`
const Header=styled(Box)`
padding:15px 24px
`

const ButtonWrappper=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 /10%);
border-top: 1px solid #f0f0f0
`

const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
background:rgb(25,118,210);
color:white;
width:250px;
height:51px
`
function Cart() {

  const  {cartItems}= useSelector(state=>state.cart)
  console.log(cartItems);
  return (
   <>
 {  cartItems.length ?
   <Container container>
    <Grid item lg={9} md={9} sm={12} xs={12}>
        <Header>
            <Typography>My Cart ({cartItems.length})</Typography>
        </Header>
        {
            cartItems.map((item)=>(
                <CartItem item={item}/>
            ))
        }
        <ButtonWrappper>
          <StyledButton>Place Order</StyledButton>
        </ButtonWrappper>
    </Grid>
    <Grid item lg={3} md={3} sm={12} xs={12}>
        <TotalView cartItems={cartItems}/>
    </Grid>
   </Container>
   :<div><EmptyCart/></div>
 }
   </>
  )
}

export default Cart