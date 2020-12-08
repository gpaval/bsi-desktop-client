import storageConstants from "../../constants/storageConstants";
import ButtonComponent from "../Button/Button";

export const COLUMNS = (history) => [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Permissions",
    accessor: "requiredKeys",
    Cell: ({ cell }) => (
      <>
        {((cell && cell.value) || []).map((value) => (
          <div key={value}>{value}</div>
        ))}
      </>
    ),
  },
  {
    Header: "",
    accessor: "redirectTo",
    Cell: ({ cell }) => (
      <div
        onClick={() => {
          localStorage.setItem(storageConstants.shouldRestart, true);
          history.push(cell.value);
        }}
      >
        Visit
      </div>
    ),
  },
  {
    height: 80,
    Header: "",
    accessor: "id",
    Cell: ({ cell }) => (
      <ButtonComponent
        width={"97px"}
        height={"40px"}
        text={"more info"}
        onClick={() => history.push(`/cms-update/${cell.value}`)}
      />
    ),
  },
];
