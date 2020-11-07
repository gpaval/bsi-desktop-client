import React from "react";
import StyledIframeSrcFormularScreen from "./StyledIframeSrcFormularScreen";

const IframeSrcFormularScreen = ({ formInputs }) => {
  console.log(formInputs);
  return (
    <StyledIframeSrcFormularScreen>
      <div className="form">
        <div className="form__title">{formInputs.title}</div>
        <div className="form__subtitle">{formInputs.subtitle}</div>
        {(formInputs.fields || []).map((field, index) => (
          <div className="form-field" key={index}>
            <label className="form-field__label">
              {field.label}
              {field.isRequired && "*"}
            </label>
            <input className="form-field__input" />
          </div>
        ))}
        <button className="form__button">Submit</button>
      </div>
    </StyledIframeSrcFormularScreen>
  );
};

export default IframeSrcFormularScreen;
