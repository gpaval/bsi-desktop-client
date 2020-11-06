import styled from "styled-components";

const StyledIframeSrcQRScreen = styled.div`
  display: flex;
  justify-content: center;
  .qr-page {
    margin-top: 10px;
    &__code {
      max-width: 200px;
      max-height: 200px;
    }
    &__title {
      margin-top: 10px;
      max-width: 180px;
      text-align: center;
    }
  }
`;

export default StyledIframeSrcQRScreen;
