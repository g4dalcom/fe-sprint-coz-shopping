import reactDom from "react-dom";

const DropDown = ({ children }) => {
  const el = document.getElementById("dropdown");

  return reactDom.createPortal(children, el);
};

export default DropDown;
