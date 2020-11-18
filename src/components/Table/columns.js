import ButtonComponent from "../Button/Button";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "R/W Permission",
    accessor: "permission",
  },

  {
    height: 80,
    Header: "",
    accessor: "info",
    Cell: () => (
      <ButtonComponent width={"97px"} height={"28x"} text={"more info"} />
    ),
  },
];
