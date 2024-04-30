import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId } = action.payload;

      // console.log("pro", productId);
      const existingItemIndex = state.products.findIndex(
        (item) => item.productId === productId
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update it by productId without consproductIdering quantity
        state.products[existingItemIndex] = action.payload;
      } else {
        // If the item doesn't exist, add it to the cart
        state.products.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.productId !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
