import React, { useState } from 'react';
import { Box, Button, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { addToCart } from '../../../Redux/action/cartAction';
import { addtoCart } from '../../../Redux/action/cartAction';
import { PayUsingPaytm } from '../../../Service/Api';
import { post } from '../../../utilis/paytm';
const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled('img')`
  padding: 15px;
  height: 450px;
`;

const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
`;

const ActionItem = ({ products }) => {
  const { id, image, title } = products;
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    navigate("/cart");
    dispatch(addtoCart(id, quantity));
  };

  const buyNow=async()=>{
let response= await PayUsingPaytm({amount:500,email:"P@gmail.com"})

let information={
  action:'https://securegw-stage.paytm.in/order/process',
  params:response
}
post(information)
  }
  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: "90%" }}>
        <Image src={image} alt={title} />
      </Box>
      <StyledButton onClick={addItemToCart} variant='contained' style={{ marginRight: 10, background: "#ff9f00" }}>
        <AddIcon /> Add to Cart
      </StyledButton>
      <StyledButton onClick={()=>buyNow()} variant='contained' style={{ background: "#fb541b" }}>
        <ShoppingCartIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
