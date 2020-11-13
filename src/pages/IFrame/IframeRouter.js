// here we are going to decide which pages should display depending of the iFrame provided params.
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import iFrameConstants from "../../constants/iframeConstants";
import IframeSrcFormScreen from "./IframeSrcFormularScreen/IframeSrcFormScreen";
import IframeSrcQRScreen from "./IframeSrcQRScreen/IframeSrcQRScreen";

//  strucutre code qr
//  ?iFramePageType=[qrCode|formCompletion]&thirdPartyToken=['token']
/*  
localhost:3000/iframe?iFramePageType=qrCode&thirdPartyToken=12314123 

*/
/* structure form
localhost:3000/iframe?iFramePageType=formCompletion&thirdPartyToken=12314123&formInputs={"title":"Welcome","subtitle":"Hello","fields":[{"label":"your name","isRequired":true,"type":"input"},{"label":"adress","isRequired":true,"type":"input"},{"label":"phone number","isRequired":true,"type":"input"},{"label":"message","isRequired":true,"type":"textarea"}]}
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
