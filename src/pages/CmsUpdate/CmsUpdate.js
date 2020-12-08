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
              status:
                (data.requiredKeys[0].optionalPermissions.includes(item) &&
                  1) ||
                (data.requiredKeys[0].requiredPermissions.includes(item) &&
                  2) ||
                0,
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
    newItems[index].status =
      newItems[index].status === 2 ? 0 : newItems[index].status + 1;

    setItems(newItems);
  };

  const onSubmit = () => {
    const requiredPermissions = [];
    const optionalPermissions = [];

    items.forEach((item) => {
      if (item.status === 1) {
        optionalPermissions.push(item.name);
      }
      if (item.status === 2) {
        requiredPermissions.push(item.name);
      }
    });

    axios
      .post(`${process.env.REACT_APP_ENDPOINT}/editThirdParty`, {
        id: extraData.id,
        managerEmail: extraData.managerEmail,
        name,
        requiredKeys: [
          {
            requiredPermissions,
            optionalPermissions,
          },
        ],
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

  const onRemove = () => {
    axios
      .post(
        `${process.env.REACT_APP_ENDPOINT}/deleteThirdParty?id=${extraData.id}`
      )
      .then(() => {
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
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
        onRemove={onRemove}
      />
    </StyledCmsUpdate>
  );
};

export default CmsUpdate;
