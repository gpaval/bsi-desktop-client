import styled from "styled-components";

const StyledTable = styled.div`
  table {
    height: 583px;

    background: #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border-collapse: collapse;

    .row {
      height: 5px;
    }

    tr {
      text-align: center;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 25px;
      color: #000000;
      &:nth-child(odd) {
        background-color: rgba(111, 123, 217, 0.2);
      }
    }
    th {
      text-align: center;
      color: white;
      width: 1088px;
      height: 53px;
      left: 50px;
      top: 197px;
      background: #6f7bd9;

      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 29px;

      &:first-child {
        border-top-left-radius: 10px;
      }
      &:last-child {
        border-top-right-radius: 10px;
      }
    }
  }
`;

export default StyledTable;
