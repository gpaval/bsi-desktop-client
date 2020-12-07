import styled from "styled-components";

const StyledModal = styled.div`
  &.modal {
    z-index: 200;
    box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.53);
    background-color: white;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    width: 90vw;
    height: 60vw;
    border-radius: 14px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    position: absolute;

    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin-left: 5vw;
    margin-top: -71px;
  }

  &.modal--open {
    animation: openModal 0.8s ease-out forwards;
  }

  &.modal--closed {
    animation: closeModal 0.4s ease-out forwards;
  }

  @keyframes openModal {
    0% {
      opacity: 0.6;
      transform: translateY(-100%);
    }
    50% {
      opacity: 1;
      transform: translateY(70%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes closeModal {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.8;
      transform: translateY(60%);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`;

export default StyledModal;
