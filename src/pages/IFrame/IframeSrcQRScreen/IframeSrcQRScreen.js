import React, { useEffect, useState } from "react";
import StyledIframeSrcQRScreen from "./StyledIframeSrcQRScreen";
import lockIcon from "../../../assets/images/lock.svg";

const QRCode = require("qrcode.react");

const IframeSrcQRScreen = ({ userToken, connectionId }) => {
  const [organizationInfo, setOrganizationInfo] = useState({
    name: "",
  });
  const [entityToken, setEntityToken] = useState("");

  const getOrganizationData = () => {
    fetch(
      `https://16wdwjr6pj.execute-api.eu-central-1.amazonaws.com/dev/getThirdParty?id=${userToken}`
    )
      .then((rawData) => rawData.json())
      .then((data) => {
        setEntityToken(data.token);
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
          <div className="qr-page__title qr-page--themed">Welcome</div>
          <div className="qr-page__subtitle">
            please register with your{" "}
            <span className="qr-page--themed">Citizen QR Application</span>
          </div>

          <QRCode
            size={256}
            className="qr-page__code"
            value={JSON.stringify(organizationInfo)}
          />

          <div className="qr-page-footer">
            <div className="qr-page-footer__element">
              Entity token: {entityToken}
            </div>
            <div className="qr-page-footer__element">
              Entity name: {organizationInfo.name}
            </div>
            <div className="qr-page-footer__element">
              <img src={lockIcon} className="qr-page-footer__element--image" />
              Blockchain secured
            </div>
          </div>
        </div>
      )) || <div>Loading...</div>}
    </StyledIframeSrcQRScreen>
  );
};

export default IframeSrcQRScreen;
