import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import CmsComponent from "../../components/Cms/CmsComponent";
import StyledCmsUpdate from "./StyledCmsUpdate";

const CmsUpdate = () => {
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/getThirdParty?id=${id}`)
      .then((rawData) => rawData.json())
      .then((data) => {
        const newItems = data.requiredKeys.map((item) => ({
          name: item,
          isSelected: false,
        }));

        setItems(newItems);
        setName(data.name);
      });
  }, []);

  const onToggleItem = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const onSubmit = () => {
    const selectedItems = items
      .filter((item) => item.isSelected)
      .map((filteredItems) => filteredItems.name);
    console.log({ selectedItems });
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
