import React, { useEffect, useState } from "react";
import StyledIframeSrcQRScreen from "./StyledIframeSrcQRScreen";

const IframeSrcQRScreen = ({ userToken }) => {
  const [organizationInfo, setOrganizationInfo] = useState({});
  const startServerPool = () => {};
  const stopServerPool = () => {};

  const getOrganizationData = () => {
    setOrganizationInfo({
      qrCode:
        "https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png",
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
          <img
            src={organizationInfo.qrCode}
            alt="Qr code"
            className="qr-page__code"
          />
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
