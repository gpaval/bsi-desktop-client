import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/Button/Button";

import StyledCarInfo from "./StyledCarInfo";

import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import maintenanceIcon from "../../assets/images/maintenance.svg";
import creationIcon from "../../assets/images/creation.png";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import AxiosInstance from "../../utils/axiosUtils";

const icons = {
  maintenanceIcon: maintenanceIcon,
  creationIcon: creationIcon,
};

const CarInfo = () => {
  const onSubmit = () => {};
  const [carName, setCarName] = useState("");
  const [carDetails, setCarDetails] = useState({});
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [roadMapElements, setRoadMapElements] = useState([]);
  const [carLogs, setCarLogs] = useState([]);

  const history = useHistory();
  const { carId } = useParams();
  const location = useLocation();

  useEffect(() => {
    AxiosInstance.get(
      `${process.env.REACT_APP_ENDPOINT}/getVehicleHistory?vin=${carId}`
    ).then(({ data }) => {
      const processedData = (data.maintenanceHistory || []).sort(
        (a, b) => b.date - a.date
      );

      setRoadMapElements(processedData);
      setCarLogs(data.vehicleHistory);
      console.log(data.vehicleHistory);
    });

    AxiosInstance.get(
      `${process.env.REACT_APP_ENDPOINT}/getVehicleDetails?vin=${carId}`
    ).then(({ data }) => {
      setCarDetails(data[0]);
    });
  }, []);

  const onCancelModal = () => null;

  return (
    <StyledCarInfo>
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
          <div className="modal__title">Car logs</div>
          <div className="modal-content">
            {carLogs.map(
              (log) =>
                log.changes.length !== 0 && (
                  <>
                    <br />
                    <b> {new Date(log.date).toLocaleDateString()}</b>
                    <>
                      {log.changes.map((change) => (
                        <div>{change.replaceAll("undefined", " - ")}</div>
                      ))}
                    </>
                  </>
                )
            )}
          </div>
        </div>
      </Modal>
      <div className="car-info">
        <div className="car-info-header">
          <div className="car-info-header__title">{carName}</div>
          <div className="car-info-header__buttons">
            <ButtonComponent
              text={"See car logs"}
              width={"97px"}
              height={"28px"}
              onClick={() => setIsModalOpened(true)}
            />
            <div style={{ width: "30px" }}></div>
            <ButtonComponent
              text={"New maintenance"}
              width={"97px"}
              height={"28px"}
              onClick={() =>
                history.push({
                  pathname: "/new-maintenance",
                  state: {
                    vin: carDetails.VIN,
                    serviceName: location.state.organizationName,
                  },
                })
              }
            />
          </div>
        </div>
        <hr />
        <div className="car-info-details">
          <div className="car-info-details__detail">
            {(Object.entries(carDetails) || []).map(([key, value]) => (
              <div>
                {key}: {value}
              </div>
            ))}
          </div>
        </div>
        <div className="car-info__road-map">
          {(Array.isArray(roadMapElements) &&
            roadMapElements.length !== 0 && (
              <VerticalTimeline>
                {roadMapElements.map((element, key) => (
                  <VerticalTimelineElement
                    key={key}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "black",
                      color: "white",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(255, 72, 52)",
                    }}
                    date={element.date}
                    dateClassName="vertical-timeline-element--date"
                    iconStyle={{
                      background: "black",
                      color: "#fff",
                      paddingLeft: "1px",
                      fontSize: "21px",
                    }}
                    icon={
                      <img
                        className="timeline__icon"
                        src={icons[element.icon]}
                      />
                    }
                    onTimelineElementClick={() =>
                      element.onclick && element.onclick()
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      {new Date(element.date).toLocaleDateString()}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {element.serviceName}
                    </h4>
                    <br />
                    <div>
                      <div>{element.kilometers} KMs</div>
                      <br />

                      {(element.details || "").split(/\r?\n/).map((detail) => (
                        <div>{detail}</div>
                      ))}
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            )) || <div> No maintenance history yet</div>}
        </div>
      </div>
    </StyledCarInfo>
  );
};

export default CarInfo;
