// here we are going to decide which pages should display depending of the iFrame provided params.
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import iFrameConstants from "../../constants/iframeConstants";
import IframeSrcFormularScreen from "./IframeSrcFormularScreen/IframeSrcFormularScreen";
import IframeSrcQRScreen from "./IframeSrcQRScreen/IframeSrcQRScreen";

//  strucutre code qr
//  ?iFramePageType=[qrCode|formCompletion]&thirdPartyToken=['token']
//  iframe?iFramePageType=qrCode&thirdPartyToken=12314123

/* structure form
localhost:3000/iframe?iFramePageType=formCompletion&thirdPartyToken=12314123&formInputs={"title":"Welcome","subtitle":"Hello","fields":[{"label":"your name","isRequired":true},{"label":"adress","isRequired":true},{"label":"phone number","isRequired":true},{"label":"message","isRequired":true}]}
*/

const IframeRouter = () => {
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);
  const [
    displayFormCompletionScreen,
    setDisplayFormCompletionScreen,
  ] = useState(false);

  const iFramePageType = params.get("iFramePageType");
  const userToken = params.get("thirdPartyToken");

  const formInputs = JSON.parse(params.get("formInputs"));

  if (
    iFramePageType === iFrameConstants.iFramePageType.formCompletion &&
    !displayFormCompletionScreen
  ) {
    setDisplayFormCompletionScreen(true);
  }

  if (!userToken || !iFramePageType || (!!iFramePageType && !formInputs)) {
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
      )) || <IframeSrcFormularScreen formInputs={formInputs} />}
    </>
  );
};

export default IframeRouter;
