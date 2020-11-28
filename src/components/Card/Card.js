import React from "react";

import StyledCard from "./StyledCard";

const Card = ({ title, extraInfo, onClick }) => {
  return (
    <StyledCard>
      <div className="card" onClick={onClick}>
        <div className="card__title">{title}</div>
        <div className="card__info">{extraInfo}</div>
      </div>
    </StyledCard>
  );
};

export default Card;
