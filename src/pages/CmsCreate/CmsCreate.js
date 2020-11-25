import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CmsComponent from "../../components/Cms/CmsComponent";

import StyledCmsCreate from "./StyledCmsCreate";

const CmsCreate = () => {
  const [name, setName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setItems([
      { name: "email", isSelected: true },
      { name: "phone number", isSelected: false },
      { name: "address", isSelected: true },
      { name: "email", isSelected: false },
      { name: "email", isSelected: false },
      { name: "email", isSelected: true },
      { name: "email", isSelected: true },
      { name: "address", isSelected: true },
      { name: "email", isSelected: false },
      { name: "email", isSelected: false },
      { name: "email", isSelected: true },
      { name: "email", isSelected: true },
    ]);
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
