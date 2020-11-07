import styled from "styled-components";

const StyledIframeSrcFormularScreen = styled.div`
  display: flex;
  justify-content: center;
  .form {
    margin-top: 10px;

    &__title {
      text-align: center;
      font-size: 25px;
      color: rgb(255, 72, 52);
      font-weight: 500;
    }

    &__subtitle {
      text-align: center;
      margin-bottom: 20px;
    }

    &-field {
      margin-top: 10px;
      display: grid;
      &__label {
        margin-right: 7px;
        width: fit-content;
        background: white;
        margin-left: 20px;
        position: relative;
        top: 9px;
        padding: 0px 10px;
      }

      &__input {
        min-width: 400px;
        height: 45px;
        border-radius: 15px;
        border: 1px solid black;
      }
    }
    &__button {
      width: 400px;
      border-radius: 15px;
      height: 50px;
      margin-top: 55px;
      background-color: rgb(255, 72, 52);
      color: white;
      border: 1px solid;
    }
  }
`;

export default StyledIframeSrcFormularScreen;
