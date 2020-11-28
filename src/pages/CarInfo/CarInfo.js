import React, { useState } from "react";
import ButtonComponent from "../../components/Button/Button";

import StyledCarInfo from "./StyledCarInfo";

import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import maintenanceIcon from "../../assets/images/maintenance.svg";
import creationIcon from "../../assets/images/creation.svg";

const icons = {
  maintenanceIcon: maintenanceIcon,
  creationIcon: creationIcon,
};

const CarInfo = () => {
  const onSubmit = () => {};
  const [carName, setCarName] = useState("");

  const roadMapElements = [
    {
      date: "1",
      location: "asdasd",
      km: "23 000",
      information: "",
      icon: "maintenanceIcon",
    },
    {
      date: "2",
      location: "asdasd",
      km: "23 000",
      information: "",
      icon: "maintenanceIcon",
    },
    {
      date: "3",
      location: "asdasd",
      km: "23 000",
      information: "",
      icon: "creationIcon",
    },
  ];

  return (
    <StyledCarInfo>
      <div className="car-info">
        <div className="car-info-header">
          <div className="car-info-header__title">{carName}</div>
          <ButtonComponent
            text={"Create"}
            width={"97px"}
            height={"28px"}
            onClick={onSubmit}
          />
        </div>
        <hr />
        <div className="car-info-details">
          <div className="car-info-details__detail">
            VIN: XXXXXXXXXXXXXXXXXXXXX
          </div>
        </div>
        <div className="car-info__road-map">
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
                  <img className="timeline__icon" src={icons[element.icon]} />
                }
                onTimelineElementClick={() =>
                  element.onclick && element.onclick()
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {element.date}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h4>
                <div>
                  <div>{element.km}</div>
                  <div>{element.information}</div>
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
