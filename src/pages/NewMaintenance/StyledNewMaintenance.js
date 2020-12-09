import styled from "styled-components";

const StyledCmsComponent = styled.div`
  .cms {
    width: 94%;
    margin: 60px auto;

    &-header {
      display: flex;
      justify-content: space-between;
      margin-top: 110px;
      margin-bottom: 25px;

      &__title {
        font-family: Roboto;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0em;
        text-align: left;
        color: #ff4834;
      }
    }
    &-body {
      &__input {
        margin: 20px 0px;
      }
      &__error {
        color: red;
      }
    }

    &__table {
      margin-top: 25px;
    }
    &__bottom {
      margin-top: 70px;
      float: right;
      margin-bottom: 40px;
    }
  }
`;

export default StyledCmsComponent;
