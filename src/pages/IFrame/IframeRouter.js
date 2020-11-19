// here we are going to decide which pages should display depending of the iFrame provided params.
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import iFrameConstants from "../../constants/iframeConstants";
import IframeSrcFormScreen from "./IframeSrcFormularScreen/IframeSrcFormScreen";
import IframeSrcQRScreen from "./IframeSrcQRScreen/IframeSrcQRScreen";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket(process.env.REACT_APP_WS);

//  strucutre code qr
//  ?iFramePageType=[qrCode|formCompletion]&thirdPartyToken=['token']
/*  
localhost:3000/iframe?iFramePageType=qrCode&thirdPartyToken=12314123 

*/
/* structure form
localhost:3000/iframe?iFramePageType=formCompletion&thirdPartyToken=12314123&formInputs={"title":"Welcome","subtitle":"Hello","fields":[{"label":"your name","isRequired":true,"type":"input"},{"label":"adress","isRequired":true,"type":"input"},{"label":"phone number","isRequired":true,"type":"input"},{"label":"message","isRequired":true,"type":"textarea"}]}
*/

const TYPES = {
  connectionID: "connectionId",
};

const IframeRouter = () => {
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);

  const [connectionId, setConnectionId] = useState(null);

  const [
    displayFormCompletionScreen,
    setDisplayFormCompletionScreen,
  ] = useState(false);

  useEffect(() => {
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
    };
  });

  const iFramePageType = params.get("iFramePageType");
  const userToken = params.get("thirdPartyToken");
  const formInputsData = params.get("formInputs");

  const formInputs = formInputsData && JSON.parse(params.get("formInputs"));
  const isFormPage =
    iFramePageType === iFrameConstants.iFramePageType.formCompletion;
  const isValidFormPage = !!formInputs;

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
