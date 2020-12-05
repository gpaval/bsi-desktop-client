import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CmsComponent from "../../components/Cms/CmsComponent";
import axios from "axios";

import StyledCmsCreate from "./StyledCmsCreate";

const CmsCreate = () => {
  const [name, setName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/getAllRequiredKeys`)
      .then((rawData) => rawData.json())
      .then((data) => {
        const newItems = data.map((item) => ({
          name: item,
          isSelected: false,
        }));
        setItems(newItems);
      });
  }, []);

  const onToggleItem = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const onSubmit = () => {
    const requiredKeys = items
      .filter((item) => item.isSelected)
      .map((filteredItems) => filteredItems.name);

    axios
      .post(`${process.env.REACT_APP_ENDPOINT}/addThirdParties`, {
        name,
        managerEmail,
        requiredKeys,
      })
      .then((data) => {
        history.goBack();
        console.log({ data });
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const onCancel = () => {
    history.push("/cms");
  };

  return (
    <StyledCmsCreate>
      <CmsComponent
        name={name}
        onNameChange={(value) => setName(value)}
        managerEmail={managerEmail}
        onManagerEmailChange={(value) => setManagerEmail(value)}
        items={items}
        onItemSelect={(index) => onToggleItem(index)}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledCmsCreate>
  );
};

export default CmsCreate;
