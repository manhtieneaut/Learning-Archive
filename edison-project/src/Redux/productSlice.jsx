import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const searchProduct = createAsyncThunk('product/searchProduct', async (key, thunkAPI) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${key}`);
  const data = await response.json();
  console.log(data)
  return data.products;
});
export const filterProduct = createAsyncThunk('product/filterProduct', async (key, thunkAPI) => {
  const response = await fetch(`https://dummyjson.com/products/category/${key}`);
  const data = await response.json();
  console.log(data)
  return data.products;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  },
  extraReducers: {
    [searchProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [filterProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  }

});

export const selectProduct = (state) => state.product;

export default productSlice.reducer;