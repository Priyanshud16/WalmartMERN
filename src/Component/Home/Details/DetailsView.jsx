import React, { useEffect } from 'react';
import { getProductsDetails } from '../../../Redux/action/ProductsAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Grid,Typography ,styled} from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetails from './ProductDetails';


const Component=styled(Box)`
background:#f2f2f2;
margin-top:55px

`
const Container=styled(Grid)`
background:#ffffff;
display:flex
`
const RightContainer=styled(Grid)`
margin-top:50px;

`
function DetailsView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, products } = useSelector(state => state.getProductsDetails);

  useEffect(() => {
    if (id && (!products || id !== products.id)) {
      dispatch(getProductsDetails(id));
    }
  }, [dispatch, id]);

  return (
    <Component >
      {products && Object.keys(products).length > 0 && (
        <Container container style={{display:"flex"}}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem products={products}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}><Typography>{products.title}</Typography>
         
          <ProductDetails products={products}/>
          </RightContainer>
        </Container>

      )}
    </Component>
  );
}

export default DetailsView;
