import React from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";

import TableComponent from "../../components/Table/TableComponent";
import StyledCms from "./StyledCms";

const Cms = () => {
  const history = useHistory();
  return (
    <StyledCms>
      <div className="cms">
        <div className="cms-header">
          <div className="cms-header__title">Third-party CMS</div>
          <ButtonComponent
            text={"Create"}
            width={"97px"}
            height={"28px"}
            onClick={() => history.push("/cms-create")}
          />
        </div>
        <hr />
        <div className="cms__table">
          <TableComponent />
        </div>
      </div>
    </StyledCms>
  );
};

export default Cms;
