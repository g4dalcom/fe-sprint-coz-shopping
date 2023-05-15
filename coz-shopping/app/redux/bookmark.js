import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem("coz-bookmark")) || [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    getBookmarks: (state, action) => {
      state.bookmarks;
    },

    marked: (state, action) => {
      if (state.bookmarks.includes(action.payload)) {
        state.bookmarks = state.bookmarks.filter((e) => e !== action.payload);
      } else {
        state.bookmarks = [...state.bookmarks, action.payload];
      }
      console.log("redux bookmarks = ", state.bookmarks);
      localStorage.setItem("coz-bookmark", JSON.stringify(state.bookmarks));
    },
  },
});

export const bookmarkAction = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
