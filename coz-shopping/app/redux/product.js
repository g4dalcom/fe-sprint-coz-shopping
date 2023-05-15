import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const res = await axios.get(
    "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
  );
  const data = await res.data;

  return data;
});

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const res = await axios.get(
    "http://cozshopping.codestates-seb.link/api/v1/products"
  );
  const data = await res.data;

  return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
