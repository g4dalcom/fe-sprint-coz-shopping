import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    enque_notification: (state, action) => {
      state.notification = [...state.notification, action.payload];
    },

    deque_notification: (state) => {
      state.notification = state.notification.slice(1);
    },
  },
});

export const notificationAction = notificationSlice.actions;
export default notificationSlice.reducer;
