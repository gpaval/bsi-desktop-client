import styled from "styled-components";

const StyledSelectCar = styled.div`
  .select-car {
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
    &-content {
      display: flex;
      &__item {
        margin: 15px;
      }
    }
  }
`;

export default StyledSelectCar;
