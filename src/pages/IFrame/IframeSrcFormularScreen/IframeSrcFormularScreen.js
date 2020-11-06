import React from "react";
import StyledIframeSrcFormularScreen from "./StyledIframeSrcFormularScreen";

const IframeSrcFormularScreen = ({ formInputs }) => {
  return (
    <StyledIframeSrcFormularScreen>
      <div className="form">
        <div className="form__title">{formInputs.title}</div>
        <div className="form__subtitle">{formInputs.subtitle}</div>
      </div>
    </StyledIframeSrcFormularScreen>
  );
};

export default IframeSrcFormularScreen;
