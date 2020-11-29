import React from "react";
import ButtonComponent from "../../components/Button/Button";
import InputComponent from "../InputComponent/InputComponent";

import StyledCmsComponent from "./StyledCmsComponent";

const CmsComponent = ({
  isAdd = true,
  name,
  onNameChange,
  managerEmail,
  onManagerEmailChange,
  items,
  onItemSelect,
  onSubmit,
  onCancel,
}) => {
  return (
    <StyledCmsComponent>
      <div className="cms">
        <div className="cms-header">
          <div className="cms-header__title">
            {`${(isAdd && "Add") || "Edit"}`}
          </div>
          <ButtonComponent
            text={`${(isAdd && "Create") || "Submit"}`}
            width={"97px"}
            height={"28px"}
            onClick={onSubmit}
          />
        </div>
        <hr />
        <div className="cms-body">
          <div className="cms-body-grid">
            <div className="cms-body-grid--left">
              <div className="cms-body-grid--left__input">
                <InputComponent
                  label="Entity name:"
                  value={name}
                  onUpdateInput={(value) => onNameChange(value)}
                  placeholder="Entity name:"
                />
              </div>
              {isAdd && (
                <div className="cms-body-grid--left__input">
                  <InputComponent
                    label="Entity manager email:"
                    value={managerEmail}
                    onUpdateInput={(value) => onManagerEmailChange(value)}
                    placeholder="Entity manager email"
                  />
                </div>
              )}
            </div>
            <div className="cms-body-grid__right">
              <div className="cms-body-selector">
                {(items || []).map((item, index) => (
                  <div
                    onClick={() => onItemSelect(index)}
                    className={`cms-body-selector__item ${
                      item.isSelected && "cms-body-selector__item--selected"
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cms__bottom">
          <ButtonComponent
            text={"Cancel"}
            width={"97px"}
            height={"28px"}
            onClick={onCancel}
            type={"white"}
          />
        </div>
      </div>
    </StyledCmsComponent>
  );
};

export default CmsComponent;
