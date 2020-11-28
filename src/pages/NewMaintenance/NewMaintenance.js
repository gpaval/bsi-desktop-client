import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";
import InputComponent from "../../components/InputComponent/InputComponent";

import StyledNewMaintenance from "./StyledNewMaintenance";

const NewMaintenance = () => {
  const history = useHistory();
  const onSubmit = () => {};
  const onCancel = () => {
    history.goBack();
  };

  const [numberOfKm, setNumberOfKm] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  return (
    <StyledNewMaintenance>
      <div className="cms">
        <div className="cms-header">
          <div className="cms-header__title">New maintenance</div>
          <ButtonComponent
            text={"Submit"}
            width={"97px"}
            height={"28px"}
            onClick={onSubmit}
          />
        </div>
        <hr />
        <div className="cms-body">
          <div className="cms-body__input">
            <InputComponent
              onUpdateInput={(value) => setNumberOfKm(value)}
              value={numberOfKm}
              label={"Number of KM"}
              width="99%"
            />
          </div>
          <div className="cms-body__input">
            <InputComponent
              onUpdateInput={(value) => setExtraInfo(value)}
              isTextArea={true}
              value={extraInfo}
              label={"Extra informations"}
              width="99%"
              height="400px;"
            />
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
    </StyledNewMaintenance>
  );
};

export default NewMaintenance;
