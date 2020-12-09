import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import AxiosInstance from "../../utils/axiosUtils";

import StyledSelectCar from "./StyledSelectCar";

const SelectCar = () => {
  const history = useHistory();
  const location = useLocation();

  const [cars, setCars] = useState([]);

  useEffect(() => {
    AxiosInstance.get(
      `${process.env.REACT_APP_ENDPOINT}/listVehicles?uid=${location.state.userId}`
    ).then(({ data }) => {
      setCars(data);
    });
  }, []);

  const goTo = (id) => {
    history.push({
      pathname: `/carInfo/${id}`,
      state: {
        ...location.state,
      },
    });
  };

  return (
    <StyledSelectCar>
      <div className="select-car">
        <div className="select-car-header">
          {(location?.state?.firstName || location?.state?.lastName) && (
            <div className="select-car-header__title">
              current client:{" "}
              {location.state.firstName && (
                <span>{location.state.firstName}</span>
              )}{" "}
              {location.state.lastName && (
                <span>{location.state.lastName}</span>
              )}{" "}
            </div>
          )}
        </div>
        <hr />
        <div className="select-car-content">
          {cars.map((car) => (
            <div className="select-car-content__item">
              <Card
                title={car.model}
                extraInfo={car.VIN}
                onClick={() => goTo(car.VIN)}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledSelectCar>
  );
};

export default SelectCar;
