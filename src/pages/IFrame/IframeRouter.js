// here we are going to decide which pages should display depending of the iFrame provided params.
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import iFrameConstants from "../../constants/iframeConstants";
import IframeSrcFormScreen from "./IframeSrcFormularScreen/IframeSrcFormScreen";
import IframeSrcQRScreen from "./IframeSrcQRScreen/IframeSrcQRScreen";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import storageConstants from "../../constants/storageConstants";

const client = new W3CWebSocket(process.env.REACT_APP_WS);

//  strucutre code qr
//  ?iFramePageType=[qrCode|formCompletion]&thirdPartyToken=['token']
/*  
localhost:3000/iframe?iFramePageType=qrCode&thirdPartyToken=1a32f9b9-07ef-4e48-8967-bfca1af6997d

*/
/* structure form
localhost:3000/iframe?iFramePageType=formCompletion&thirdPartyToken=12314123&formInputs={"title":"Welcome","subtitle":"Hello","fields":[{"label":"your name","isRequired":true,"type":"input"},{"label":"adress","isRequired":true,"type":"input"},{"label":"phone number","isRequired":true,"type":"input"},{"label":"message","isRequired":true,"type":"textarea"}]}
*/

const TYPES = {
  connectionID: "connectionId",
  registering: "registering",
};

function createCookie(name, value, minutes) {
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

const IframeRouter = () => {
  const history = useHistory();
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);

  const [connectionId, setConnectionId] = useState(null);

  const [
    displayFormCompletionScreen,
    setDisplayFormCompletionScreen,
  ] = useState(false);

  const iFramePageType = params.get("iFramePageType");
  const userToken = params.get("thirdPartyToken");
  const formInputsData = params.get("formInputs");

  const formInputs = formInputsData && JSON.parse(params.get("formInputs"));
  const isFormPage =
    iFramePageType === iFrameConstants.iFramePageType.formCompletion;
  const isValidFormPage = !!formInputs;

  useEffect(() => {
    if (localStorage.getItem(storageConstants.shouldRestart)) {
      localStorage.removeItem(storageConstants.shouldRestart);
      window.location.reload();
    }
    client.onopen = (connection) => {
      console.log(connection);
      console.log("WebSocket Client Connected");
      client.send(
        JSON.stringify({
          text: "test",
          type: TYPES.connectionID,
        })
      );
      console.log("sent!");
    };
    client.onmessage = ({ data }) => {
      const receivedData = JSON.parse(data);
      if (receivedData && receivedData.type === TYPES.connectionID) {
        setConnectionId(receivedData.connectionId);
      }

      if (receivedData && receivedData.type === TYPES.registering) {
        try {
          const parsedData = JSON.parse(data);
          const parsedMessage = (JSON.parse(parsedData.message) || []).flat(
            1
          )[0];
          createCookie(storageConstants.sessionCookie, "value", 15);
          const url = window.location.pathname + window.location.search;

          localStorage.setItem(storageConstants.registerURL, url);

          history.push({
            pathname: "/successfully",
            state: {
              ...parsedMessage,
            },
          });
        } catch (err) {
          console.log(err);
        }
      }
    };
  });

  if (isFormPage && !displayFormCompletionScreen) {
    setDisplayFormCompletionScreen(true);
  }

  if (!userToken || !iFramePageType || (isFormPage && !isValidFormPage)) {
    return <div>Invalid url source.</div>;
  }

  // todo: implement with databse
  const handleQRScan = () => {
    // server call
    if (isFormPage) {
      setDisplayFormCompletionScreen(true);
    }
  };

  return (
    <>
      {(!displayFormCompletionScreen && (
        <IframeSrcQRScreen
          userToken={userToken}
          connectionId={connectionId}
          onSuccessScan={() => handleQRScan()}
        />
      )) ||
        (isFormPage && isValidFormPage && (
          <IframeSrcFormScreen formInputs={formInputs} />
        ))}
    </>
  );
};

export default IframeRouter;
