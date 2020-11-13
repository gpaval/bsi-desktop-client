import React from "react";
import StyledButtonComponent from "./StyledButton";

function getBackgroundByType(type) {
  if (type === "primary") {
    return "#FF4834";
  }
}

const ButtonComponent = ({
  width = "223px",
  height = "52px",
  type = "primary",
  text = "",
  onClick,
}) => {
  return (
    <StyledButtonComponent
      width={width}
      height={height}
      background={getBackgroundByType(type)}
      onClick={onClick}
    >
      <>{text}</>
    </StyledButtonComponent>
  );
};

export default ButtonComponent;
