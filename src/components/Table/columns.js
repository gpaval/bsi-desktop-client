import storageConstants from "../../constants/storageConstants";
import ButtonComponent from "../Button/Button";

const concatData = ({ optionalPermissions = [], requiredPermissions = [] }) => {
  return [...optionalPermissions, ...requiredPermissions];
};

export const COLUMNS = (history) => [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell }) => <div className="table-text">{cell.value}</div>,
  },
  {
    Header: "Permissions",
    accessor: "requiredKeys",
    Cell: ({ cell }) => (
      <>
        {Array.isArray(cell.value) &&
          concatData(cell.value[0]).map((value) => (
            <div className="table-text" key={value}>
              {value}
            </div>
          ))}
      </>
    ),
  },
  {
    Header: "",
    accessor: "redirectTo",
    Cell: ({ cell }) => (
      <ButtonComponent
        width={"97px"}
        height={"40px"}
        text={"Visit"}
        type={"white"}
        onClick={() => {
          const url = window.location.origin + cell.value;
          const win = window.open(url, "_blank");
          win.focus();
        }}
      />
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
        text={"Update"}
        onClick={() => history.push(`/cms-update/${cell.value}`)}
      />
    ),
  },
];
