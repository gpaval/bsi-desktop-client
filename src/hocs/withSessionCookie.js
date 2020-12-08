import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import storageConstants from "../constants/storageConstants";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const WithSessionCookie = ({ component: Component }) => {
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      const cookie = getCookie(storageConstants.sessionCookie);
      if (!cookie) {
        // localStorage.setItem(storageConstants.shouldRestart, true);
        // const url = localStorage.getItem(storageConstants.registerURL);
        // history.push(url);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <Component />;
};

export default WithSessionCookie;
