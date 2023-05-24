import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCart } from '../../action/products';

const initialState = {
  cartList: []
};

export const fetchCartList = createAsyncThunk("cart/fetchCarts", async () => {
  const res = await getCart() ;

  return res.carts;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchCartList.pending, (state) => {
        state.cartList = null;
    });
    addCase(fetchCartList.fulfilled, (state, { payload }) => {
      state.cartList = payload;
    });
    addCase(fetchCartList.rejected, (state, { error }) => {
        state.cartList = null;
      });   
  },
});

export const selectCarts = (state) => state.cart.cartList
export default cartSlice.reducer;