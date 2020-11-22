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
      &-grid {
        display: inline-grid;
        margin-top: 35px;
        width: 100%;
        grid-template-columns: 1fr 4fr;
        grid-gap: 25px;
        &--left__input {
          margin-bottom: 40px;
        }
        &__right {
          border: 1px solid black;
          border-radius: 10px;
          padding: 30px;
          padding-right: 0px;
        }
      }

      &-selector {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;

        &__item {
          width: 97px;
          height: 28px;
          border: 0.2px solid #000000;
          box-sizing: border-box;
          border-radius: 10px;
          text-align: center;
          height: fit-content;
          margin-right: 30px;
          padding: 10px;
          margin-bottom: 30px;
          &--selected {
            color: white;
            background: #ff4834;
          }
        }
      }
    }

    &__table {
      margin-top: 25px;
    }
    &__bottom {
      margin-top: 100px;
      float: right;
    }
  }
`;

export default StyledCmsComponent;
