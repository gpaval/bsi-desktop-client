import React, { useEffect, useState } from "react";
import StyledIframeSrcQRScreen from "./StyledIframeSrcQRScreen";
import lockIcon from "../../../assets/images/lock.svg";
import ButtonComponent from "../../../components/Button/Button";
import Modal from "../../Modal/Modal";
import AxiosInstance from "../../../utils/axiosUtils";

const QRCode = require("qrcode.react");

const IframeSrcQRScreen = ({
  userToken,
  connectionId,
  setOrganizationName,
}) => {
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [entityToken, setEntityToken] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [carLogs, setCarLogs] = useState([]);

  const getOrganizationData = () => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/getThirdParty?id=${userToken}`)
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

        setOrganizationName(data.name);

        AxiosInstance.get(
          `${process.env.REACT_APP_ENDPOINT}/getServiceReport?service=${data.name}`
        ).then(({ data }) => {
          setCarLogs(data);
        });
      });
  };

  useEffect(() => {
    if (connectionId) {
      getOrganizationData();
    }
  }, [connectionId]);
  return (
    <StyledIframeSrcQRScreen>
      {(Object.keys(organizationInfo).length !== 0 && (
        <div className="qr-page">
          <Modal show={isModalOpened}>
            <div className="modal">
              <div className="modal__button">
                <ButtonComponent
                  text={"Close"}
                  width={"97px"}
                  height={"28px"}
                  onClick={() => setIsModalOpened(false)}
                />
              </div>
              <div className="modal__title">Service logs</div>
              <div className="modal-content">
                {carLogs.map(
                  (log) =>
                    log.changes.length !== 0 && (
                      <>
                        <br />
                        <b> {new Date(log.date).toLocaleDateString()}</b>
                        <>
                          <div>{log.changes}</div>
                        </>
                      </>
                    )
                )}
              </div>
            </div>
          </Modal>

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
              Entity name: {organizationInfo.name}
            </div>
            <div className="qr-page-footer__element">
              <img src={lockIcon} className="qr-page-footer__element--image" />
              Blockchain secured
              <br />
              <br />
              <ButtonComponent
                text={"See Service Logs"}
                width={"150px"}
                height={"50px"}
                onClick={() => setIsModalOpened(true)}
              />
            </div>
          </div>
        </div>
      )) || <div>Loading...</div>}
    </StyledIframeSrcQRScreen>
  );
};

export default IframeSrcQRScreen;
