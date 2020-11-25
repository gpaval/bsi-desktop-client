import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";

import TableComponent from "../../components/Table/TableComponent";
import StyledCms from "./StyledCms";

const Cms = () => {
  const [thirdParties, setThirdParties] = useState([]);

  useEffect(() => {
    fetch(
      "https://16wdwjr6pj.execute-api.eu-central-1.amazonaws.com/dev/listThirdParties"
    )
      .then((rawData) => rawData.json())
      .then((data) => {
        setThirdParties(data);
      });
  }, []);

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
          {Array.isArray(thirdParties) && thirdParties.length > 0 && (
            <TableComponent thirdParties={thirdParties} />
          )}
        </div>
      </div>
    </StyledCms>
  );
};

export default Cms;
