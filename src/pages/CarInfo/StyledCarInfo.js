import styled from "styled-components";

const StyledCarInfo = styled.div`
  .modal {
    &__button {
      position: relative;
      right: 20px;
    }
    &__title {
      margin-right: 36px;
      margin-top: 40px;
      font-weight: 700;
      font-size: 30px;
    }
  }
  .vertical-timeline::before {
    background: #ff4834 !important;
  }
  .timeline__icon {
    width: inherit;
    height: inherit;
  }
  .car-info {
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

    &-details {
      margin-top: 46px;
      &__detail {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
      }
      margin-bottom: 108px;
    }
  }
`;

export default StyledCarInfo;
