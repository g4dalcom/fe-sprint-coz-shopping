import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import bookmarkSlice from "./bookmark";
import notificationSlice from "./notification";

const store = configureStore({
  reducer: {
    product: productSlice,
    bookmark: bookmarkSlice,
    notification: notificationSlice,
  },
});

export default store;
