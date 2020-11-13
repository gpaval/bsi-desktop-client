import styled from "styled-components";

const StyledIframeSrcQRScreen = styled.div`
  display: flex;
  justify-content: center;
  .qr-page {
    margin-top: 10px;
    &__code {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &__title {
      margin-top: 10px;
      max-width: 180px;
      text-align: center;
    }
  }
`;

export default StyledIframeSrcQRScreen;
