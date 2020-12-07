import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import CmsComponent from "../../components/Cms/CmsComponent";
import StyledCmsUpdate from "./StyledCmsUpdate";
import axios from "axios";

const CmsUpdate = () => {
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [extraData, setExtraData] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/getAllRequiredKeys`)
      .then((rawData) => rawData.json())
      .then((allKeys) => {
        fetch(`${process.env.REACT_APP_ENDPOINT}/getThirdParty?id=${id}`)
          .then((rawData) => rawData.json())
          .then((data) => {
            const newItems = allKeys.map((item) => ({
              name: item,
              isSelected: data.requiredKeys.includes(item),
            }));

            setExtraData({
              id: data.id,
              managerEmail: data.managerEmail,
            });
            setItems(newItems);
            setName(data.name);
          });
      });
  }, [id]);

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
      .post(`${process.env.REACT_APP_ENDPOINT}/editThirdParty`, {
        id: extraData.id,
        managerEmail: extraData.managerEmail,
        name,
        requiredKeys,
      })
      .then((data) => {
        history.goBack();
        console.log({ data });
      })
      .catch((err) => {
        console.log({ err });
      });

    console.log("submitted!");
  };
  const onCancel = () => {
    history.push("/cms");
  };

  return (
    <StyledCmsUpdate>
      <CmsComponent
        isAdd={false}
        name={name}
        onNameChange={(value) => setName(value)}
        items={items}
        onItemSelect={(index) => onToggleItem(index)}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledCmsUpdate>
  );
};

export default CmsUpdate;
