import * as actionType from './constants/ProductsConstant.js';

export const getProductsReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload // Merging existing state with new products data
            };
        case actionType.GET_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export const getProductDetailReducer=(state={products:{}},action)=>{
switch(action.type){
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
        return {loading:true}
        
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false,products:action.payload}

            case actionType.GET_PRODUCT_DETAILS_FAIL:
                return {loading:false,error:action.payload}

                case actionType.GET_PRODUCT_DETAILS_RESET:
                    return {products:{}}
               default:
                return state
                
}
}