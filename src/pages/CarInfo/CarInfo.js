import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/Button/Button";

import StyledCarInfo from "./StyledCarInfo";

import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import maintenanceIcon from "../../assets/images/maintenance.svg";
import creationIcon from "../../assets/images/creation.svg";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import axios from "axios";

const icons = {
  maintenanceIcon: maintenanceIcon,
  creationIcon: creationIcon,
};

const CarInfo = () => {
  const onSubmit = () => {};
  const [carName, setCarName] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [roadMapElements, setRoadMapElements] = useState([]);

  const history = useHistory();
  const { carId } = useParams();
  console.log(carId);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ENDPOINT}/getVehicleHistory?vin=${carId}`)
      .then(({ data }) => {
        console.log(data);
        setRoadMapElements(data);
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
          <div className="modal-content"></div>
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
              onClick={() => history.push("/new-maintenance")}
            />
          </div>
        </div>
        <hr />
        <div className="car-info-details">
          <div className="car-info-details__detail">
            VIN: XXXXXXXXXXXXXXXXXXXXX
          </div>
        </div>
        <div className="car-info__road-map">
          <VerticalTimeline>
            {roadMapElements.map(({ data: element }, key) => (
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
                // icon={
                //   <img className="timeline__icon" src={icons[element.icon]} />
                // }
                onTimelineElementClick={() =>
                  element.onclick && element.onclick()
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {element.data}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.serviceName}
                </h4>
                <div>
                  <div>{element.kilometraj}</div>
                  <div>{element.constatari}</div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </StyledCarInfo>
  );
};

export default CarInfo;
