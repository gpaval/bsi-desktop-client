import React from "react";

import StyledSuccessfullyAuthed from "./StyledSuccessfullyAuthed";

import database from "../../assets/images/db.svg";
import dots from "../../assets/images/dots.svg";
import maintenance from "../../assets/images/maintenance.svg";
import lockIcon from "../../assets/images/lock.svg";

import ButtonComponent from "../../components/Button/Button";
import { useHistory, useLocation } from "react-router-dom";

const SuccessfullyAuthed = () => {
  const location = useLocation();
  const history = useHistory();

  const onContinue = () => {
    history.push({
      pathname: "/selectCar",
      state: {
        ...location.state,
      },
    });
  };

  return (
    <StyledSuccessfullyAuthed>
      <div className="title">Successfully authenticated</div>
      <div className="subtitle">
        {(location.state && location.state.firstName) || ""} has shared all the
        required information with the current service
      </div>
      <div className="content">
        <img src={database} />

        <div className="content-center">
          <img src={dots} />
          <div>
            <img src={lockIcon} className="qr-page-footer__element--image" />
            <div>Blockchain secured</div>
          </div>
        </div>

        <img src={maintenance} />
      </div>
      <div className="button">
        <ButtonComponent text={"Continue"} onClick={onContinue} />
      </div>
    </StyledSuccessfullyAuthed>
  );
};

export default SuccessfullyAuthed;
