import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import { getProductDetailReducer, getProductsReducers } from './action/reducers/ProductReducers';
import { cartReducer } from './action/reducers/CartReducer';
// import { getProductDetails } from './action/ProductsAction';

const reducers = combineReducers({
    getProducts: getProductsReducers,
    getProductsDetails:getProductDetailReducer,
    cart:cartReducer

    
});

const middleware = [thunk];
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
