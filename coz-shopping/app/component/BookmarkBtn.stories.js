import BookmarkBtn from "./BookmarkBtn";
import { Provider } from "react-redux";
import store from "../redux/store";

export default {
  title: "Components/BookmarkBtn",
  component: BookmarkBtn,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const marked = {
  args: {
    checking: true,
  },
};

export const noMarked = {
  args: {
    checking: false,
  },
};
