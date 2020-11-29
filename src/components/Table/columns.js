import ButtonComponent from "../Button/Button";

export const COLUMNS = (history) => [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "ID",
    accessor: "token",
  },
  {
    Header: "R/W Permission",
    accessor: "permission",
  },

  {
    height: 80,
    Header: "",
    accessor: "id",
    Cell: ({ cell }) => (
      <ButtonComponent
        width={"97px"}
        height={"28x"}
        text={"more info"}
        onClick={() => history.push(`/cms-update/${cell.value}`)}
      />
    ),
  },
];
