import Filtering from "./Filtering";

export default {
  title: "Components/Filtering",
  component: Filtering,
};

export const checked = {
  args: {
    filterValue: "",
  },
};

export const unChecked = {
  args: {
    filterValue: undefined,
  },
};
