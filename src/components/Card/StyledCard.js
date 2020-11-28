import styled from "styled-components";

const StyledCard = styled.div`
  .card {
    width: 351px;
    height: 165px;
    border: 0.2px solid #000000;
    border-radius: 10px;

    &__title {
      font-size: 28px;
      font-weight: 700;
      line-height: 33px;
      letter-spacing: 0em;
      margin-top: 25px;
      margin-bottom: 63px;
      margin-left: 20px;
    }
    &__info {
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0em;
      margin-left: 25px;
    }
  }
`;

export default StyledCard;
