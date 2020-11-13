import styled from "styled-components";

const StyledButtonComponent = styled.button`
  min-height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  background-color: ${(props) => props.background};
  border-radius: 15px;
  border: none;
  color: white;
  font-weight: 700;
  line-height: 21px;
  outline: none;
  .loader {
    width: 38px;
    height: 35px;
    margin-top: 7px;
  }
`;

export default StyledButtonComponent;
