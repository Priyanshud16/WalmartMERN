import { Box, Typography,styled,Button} from "@mui/material"
import { addEllipsis } from "../../utilis/commonUtlis"
import GroupedButton from "./ButtonGroup"
import { removeFromCart } from "../../Redux/action/cartAction"
import { useDispatch } from "react-redux"
const Component=styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
`
const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column

`

const Remove=styled(Button)`
margin-top:30px;
font-size:16px;
color:#000;
font-weight:600
`
const CartItem=({item})=>{
const dispatch=useDispatch()
    function removeItemFromCart(id){
      dispatch(removeFromCart(id))
    }
    return (
       <Component>
        <LeftComponent>
            <img src={item.image} style={{height:"100px"}} alt="product" />
            <GroupedButton/>
        </LeftComponent>
        <Box style={{margin:"20px"}}>
            <Typography>{addEllipsis(item.title)}</Typography>
            <Typography style={{fontWeight:600,fontSize:18}}>₹{item.price}</Typography>
            <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
      
       </Component>
    )
}

export default CartItem