import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";

import StyledSelectCar from "./StyledSelectCar";

const SelectCar = () => {
  const history = useHistory();
  const location = useLocation();

  const goTo = (id) => {
    history.push({
      pathname: `/carInfo/${id}`,
      state: {
        ...location.state,
      },
    });
  };

  const mockData = [
    {
      title: "GOLF IV",
      token: "1312OJNMKJVLOOIPI1I0234",
      id: 1,
    },
    {
      title: "GOLF V",
      token: "nknakjdnajksdnjksandk1322",
      id: 2,
    },
  ];

  return (
    <StyledSelectCar>
      <div className="select-car">
        <div className="select-car-header">
          <div className="select-car-header__title">wip</div>
        </div>
        <hr />
        <div className="select-car-content">
          {mockData.map((card) => (
            <div className="select-car-content__item">
              <Card
                title={card.title}
                extraInfo={card.token}
                onClick={() => goTo(card.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledSelectCar>
  );
};

export default SelectCar;
