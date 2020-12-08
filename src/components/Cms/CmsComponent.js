import React from "react";
import ButtonComponent from "../../components/Button/Button";
import InputComponent from "../InputComponent/InputComponent";

import StyledCmsComponent from "./StyledCmsComponent";

const getItemStatus = (status) => {
  if (status === 0) {
    return;
  }
  if (status === 1) {
    return "cms-body-selector__item--optional";
  }
  if (status === 2) {
    return "cms-body-selector__item--mandatory";
  }
};

const CmsComponent = ({
  isAdd = true,
  name,
  onNameChange,
  managerEmail,
  onManagerEmailChange,
  items,
  onItemSelect,
  onSubmit,
  onRemove,
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
            text={"Cancel"}
            width={"97px"}
            height={"28px"}
            onClick={onCancel}
            type={"white"}
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

            <div>
              <div className="cms-body-grid-legend">
                <div className="cms-body-grid-legend-item">
                  <div className="cms-body-grid-legend-item__ball cms-body-grid-legend-item__ball--unselected"></div>{" "}
                  Unselected
                </div>
                <div className="cms-body-grid-legend-item">
                  <div className="cms-body-grid-legend-item__ball cms-body-grid-legend-item__ball--optional"></div>{" "}
                  Optional
                </div>{" "}
                <div className="cms-body-grid-legend-item">
                  <div className="cms-body-grid-legend-item__ball cms-body-grid-legend-item__ball--mandatory"></div>{" "}
                  Mandatory
                </div>
              </div>
              <div className="cms-body-grid__right">
                <div className="cms-body-selector">
                  {(items || []).map((item, index) => (
                    <div
                      style={{
                        ...(item.name === "userId" && {
                          pointerEvents: "none",
                          opacity: "50%",
                        }),
                      }}
                      onClick={() => onItemSelect(index)}
                      className={`cms-body-selector__item 
                    ${getItemStatus(item.status)}
                    `}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cms__bottom">
          {!isAdd && (
            <>
              <ButtonComponent
                text={"Remove"}
                width={"97px"}
                type={"white"}
                height={"28px"}
                onClick={onRemove}
              />
              <span style={{ marginRight: "20px" }} />
            </>
          )}
          <ButtonComponent
            text={`${(isAdd && "Create") || "Submit"}`}
            width={"97px"}
            height={"28px"}
            onClick={onSubmit}
          />
        </div>
      </div>
    </StyledCmsComponent>
  );
};

export default CmsComponent;
