import React, { useEffect, useState } from "react";
import StyledIframeSrcQRScreen from "./StyledIframeSrcQRScreen";

const QRCode = require("qrcode.react");

const IframeSrcQRScreen = ({ userToken, connectionId }) => {
  const [organizationInfo, setOrganizationInfo] = useState({
    name: "",
  });
  const startServerPool = () => {};
  const stopServerPool = () => {};

  const getOrganizationData = () => {
    // todo: de luat datele organizatiei din id, pentru a le trimite in codul qr (ex: datele pe care utilizatorul accepta sa le ofere.)
    setOrganizationInfo({
      name: "Test",
    });
  };

  useEffect(() => {
    getOrganizationData();
    startServerPool();
    return () => {
      stopServerPool();
    };
  }, []);

  return (
    <StyledIframeSrcQRScreen>
      {(!!Object.keys(organizationInfo).length !== 0 && (
        <div className="qr-page">
          <QRCode
            className="qr-page__code"
            value={JSON.stringify({
              name: "Test",
              connectionId,
            })}
          />
          <div>
            {JSON.stringify({
              name: "Test",
              connectionId,
            })}
          </div>

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
