import Loading from "./loading";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    pacmanColor: {
      control: "color",
    },
    feedColor: {
      control: "color",
    },
  },
};

export const Default = {};

Default.args = {
  backgroundColor: "#fff",
  pacmanColor: "#5a49f5",
  feedColor: "#696363",
};
