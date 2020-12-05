import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";

import TableComponent from "../../components/Table/TableComponent";
import StyledCms from "./StyledCms";

const Cms = () => {
  const [thirdParties, setThirdParties] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/listThirdParties`)
      .then((rawData) => rawData.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const parsedData = data.map((rawData) => ({
            redirectTo: `/iframe?iFramePageType=qrCode&thirdPartyToken=${rawData.id}`,
            ...rawData,
          }));
          setThirdParties(parsedData);
        }
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
