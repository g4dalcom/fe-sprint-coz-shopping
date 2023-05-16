import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("coz-bookmark"))
      : [],
};

{
  /* @getBookmarks 로컬스토리지에서 북마크 된 상품 id 배열 가져오기

    QQQQQQQQQQQQQQQQQQQQ
    - 사이드 이펙트가 발생하는 부분인지 궁금.. 외부에서 조건에 따라 addBookmark, removeBookmark로 디스패치 하는 게 나은 지 궁금!
    @marked 북마크된 상품이면 북마크 배열에서 제거하고, 새로운 상품이면 북마크 배열에 추가
*/
}
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
      localStorage.setItem("coz-bookmark", JSON.stringify(state.bookmarks));
    },
  },
});

export const bookmarkAction = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
