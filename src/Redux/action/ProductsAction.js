import axios from "axios";
import * as actionType from '../action/reducers/constants/ProductsConstant';

// const URL = "http://localhost:3000";

export const getProducts = () => async (dispatch) => {
    try {
      //   let { data } = await axios.get(`${URL}/user/products`);
      let {data}=await axios.get("https://fakestoreapi.com/products")
        console.log(data); // corrected from res to data
        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
    }
};


export const getProductsDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST})
        const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
       
       dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
       
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}