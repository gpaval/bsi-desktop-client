// here we are going to decide which pages should display depending of the iFrame provided params.
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import iFrameConstants from "../../constants/iframeConstants";
import IframeSrcFormularScreen from "./IframeSrcFormularScreen/IframeSrcFormularScreen";
import IframeSrcQRScreen from "./IframeSrcQRScreen/IframeSrcQRScreen";

// structure of url params:
//  ?iFramePageType=[qrCode|formCompletion]&thirdPartyToken=['token']
//  iframe?iFramePageType=qrCode&thirdPartyToken=12314123

const IframeRouter = () => {
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);
  const [
    displayFormCompletionScreen,
    setDisplayFormCompletionScreen,
  ] = useState(false);

  const iFramePageType = params.get("iFramePageType");
  const userToken = params.get("thirdPartyToken");

  console.log(userToken, iFramePageType);

  if (!userToken || !iFramePageType) {
    return <div>Invalid url source.</div>;
  }

  // todo: implement with databse
  const handleQRScan = () => {
    // server call
    if (iFramePageType === iFrameConstants.iFramePageType.formCompletion) {
      setDisplayFormCompletionScreen(true);
    }
  };

  return (
    <>
      {" "}
      {(!displayFormCompletionScreen && (
        <IframeSrcQRScreen
          userToken={userToken}
          onSuccessScan={() => handleQRScan()}
        />
      )) || <IframeSrcFormularScreen />}
    </>
  );
};

export default IframeRouter;
