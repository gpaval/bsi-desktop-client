import React, { useEffect, useState } from "react";
import StyledIframeSrcQRScreen from "./StyledIframeSrcQRScreen";

const QRCode = require("qrcode.react");

const IframeSrcQRScreen = ({ userToken, connectionId }) => {
  const [organizationInfo, setOrganizationInfo] = useState({
    name: "",
  });

  const getOrganizationData = () => {
    fetch(
      `https://16wdwjr6pj.execute-api.eu-central-1.amazonaws.com/dev/getThirdParty?id=${userToken}`
    )
      .then((rawData) => rawData.json())
      .then((data) => {
        delete data.token;
        delete data.permission;
        delete data.id;
        setOrganizationInfo({
          connectionId,
          ...data,
        });
      });
  };

  useEffect(() => {
    console.log("here!");
    if (connectionId) {
      getOrganizationData();
    }
  }, [connectionId]);

  return (
    <StyledIframeSrcQRScreen>
      {(!!Object.keys(organizationInfo).length !== 0 && (
        <div className="qr-page">
          <QRCode
            className="qr-page__code"
            value={JSON.stringify(organizationInfo)}
          />
          <div>{JSON.stringify(organizationInfo)}</div>

          <div className="qr-page__title">
            Scan the following qr code, in order to register to the{" "}
            {organizationInfo.name} organization.
          </div>
        </div>
      )) || <div>Loading...</div>}
    </StyledIframeSrcQRScreen>
  );
};

export default IframeSrcQRScreen;
