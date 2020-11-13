import React, { useEffect, useState } from "react";
import StyledIframeSrcFormScreen from "./StyledIframeSrcFormScreen";

const IframeSrcFormScreen = ({ formInputs = {} }) => {
  const [inputValues, setInputValues] = useState([]);

  useEffect(() => {
    const numberOfInputElements = formInputs.fields && formInputs.fields.length;

    if (numberOfInputElements) {
      const emptyValues = new Array(numberOfInputElements).fill("");
      setInputValues(emptyValues);
    }
  }, []);

  const updateInput = (index, value) => {
    const valuesCopy = [...inputValues];
    valuesCopy[index] = value;
    setInputValues(valuesCopy);
  };

  return (
    <StyledIframeSrcFormScreen>
      <div className="form">
        <div className="form__title">{formInputs.title}</div>
        <div className="form__subtitle">{formInputs.subtitle}</div>
        {(formInputs.fields || []).map((field, index) => (
          <div className="form-field" key={index}>
            <label className="form-field__label">
              {field.label}
              {field.isRequired && "*"}
            </label>
            {field.type === "input" && (
              <input
                className="form-field__input"
                placeholder={field.label}
                value={inputValues[index]}
                onChange={({ target }) => updateInput(index, target.value)}
              />
            )}
            {field.type === "textarea" && (
              <textarea
                className="form-field__input form-field__input--textarea"
                placeholder={field.label}
                value={inputValues[index]}
                onChange={({ target }) => updateInput(index, target.value)}
              />
            )}
          </div>
        ))}
        <button className="form__button">Submit</button>
      </div>
    </StyledIframeSrcFormScreen>
  );
};

export default IframeSrcFormScreen;
