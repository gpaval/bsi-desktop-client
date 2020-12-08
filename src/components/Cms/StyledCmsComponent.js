import styled from "styled-components";

const StyledCmsComponent = styled.div`
  .cms-body-grid-legend {
    display: flex;
    width: 400px;
    justify-content: space-between;
    margin-bottom: 10px;
    &-item {
      display: flex;

      &__ball {
        border: 1px solid black;
        border-radius: 10px;
        width: 15px;
        height: 15px;
        margin-right: 10px;

        &--unselected {
          background: white;
        }

        &--mandatory {
          color: white;
          background: #ff4834;
        }

        &--optional {
          color: white;
          background: #2f4858;
        }
      }
    }
  }

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
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

          width: fit-content;
          height: 28px;
          border: 0.2px solid #000000;
          box-sizing: border-box;
          border-radius: 10px;
          text-align: center;
          height: fit-content;
          margin-right: 30px;
          padding: 10px;
          margin-bottom: 30px;
          &--mandatory {
            color: white;
            background: #ff4834;
          }

          &--optional {
            color: white;
            background: #2f4858;
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
