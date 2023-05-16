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
      console.log("redux enque = ", state.notification);
    },

    deque_notification: (state) => {
      state.notification = state.notification.slice(1);
      console.log("redux deque = ", state.notification);
    },
  },
});

export const notificationAction = notificationSlice.actions;
export default notificationSlice.reducer;
