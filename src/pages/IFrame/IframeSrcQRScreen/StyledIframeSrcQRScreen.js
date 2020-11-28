import styled from "styled-components";

const StyledIframeSrcQRScreen = styled.div`
  width: 100%;
  text-align: center;
  .qr-page {
    margin-top: 104px;

    &__title {
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px;
      margin-bottom: 31px;
    }

    &__subtitle {
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px;
      margin-bottom: 72px;
    }

    &__code {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 83px;
    }
    &-footer {
      &__element {
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        margin-bottom: 32px;

        &--image {
          position: relative;
          margin-right: 10px;
          top: 5px;
        }
      }
    }

    &--themed {
      color: #ff4834;
    }
  }
`;

export default StyledIframeSrcQRScreen;
