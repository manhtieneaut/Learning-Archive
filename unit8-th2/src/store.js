// Thực hành 1
// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counter/counterSlice'
// import { todoReducer } from './features/todo/reducer'
// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//         todo: todoReducer,
//     },
// })

//Thực hành 2
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { manageUserReducer } from './features/manageApp/User/reducer'

export default configureStore({
    reducer: {
        counter: counterReducer,
        manageUser: manageUserReducer,
    },
})

//thực hành 3
// import { configureStore } from '@reduxjs/toolkit';
// import ProductSlice from './features/products/productSlice';

// export default configureStore({
//   reducer: {
//     product: ProductSlice,
//   },
// });


//thực hành 4
// import { configureStore } from '@reduxjs/toolkit';

// import { combineReducers } from "redux";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// import ProductSlice from './features/products/productSlice';

// const persistConfig = {
//   key: 'root',
//   storage
// };

// export const allReducers = combineReducers({
//   product: ProductSlice,
//   // nếu có reducer khác thì thêm ở đây
// });

// const persistedReducer = persistReducer(persistConfig, allReducers);

// export const store = configureStore({
//   reducer: persistedReducer
// });
