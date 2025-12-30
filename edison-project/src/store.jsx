import { configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import productReducer from './Redux/productSlice';

const reducer = {
  products: productReducer
}

const store = configureStore({
  reducer: reducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export default store;