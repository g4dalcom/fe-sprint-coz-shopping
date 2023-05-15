import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import bookmarkSlice from "./bookmark";

const store = configureStore({
  reducer: {
    product: productSlice,
    bookmark: bookmarkSlice,
  },
});

export default store;
