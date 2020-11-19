import React, { useEffect, useState } from "react";
import StyledIframeSrcQRScreen from "./StyledIframeSrcQRScreen";

const QRCode = require("qrcode.react");

const IframeSrcQRScreen = ({ userToken, connectionId }) => {
  const [organizationInfo, setOrganizationInfo] = useState({
    qrCode: "",
    name: "",
  });
  const startServerPool = () => {};
  const stopServerPool = () => {};

  const getOrganizationData = () => {
    setOrganizationInfo({
      qrCode: JSON.stringify({
        name: "Test",
        connectionId,
      }),
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
          <QRCode className="qr-page__code" value={organizationInfo.qrCode} />

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
