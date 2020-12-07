import React from "react";

import StyledModal from "./StyledModal";

const Modal = (props) => {
  const cssClasses = ["modal", props.show ? "modal--open" : "modal--closed"];

  return (
    <StyledModal className={cssClasses.join(" ")}>{props.children}</StyledModal>
  );
};

export default Modal;
