import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Register from "../pages/Register/Register";

const WithAuth = ({ component: Component }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        setIsLoading(false);
        setIsRegistered(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsRegistered(false);
      });
  }, []);
  return (
    (isLoading && <div>Loading...</div>) ||
    (isRegistered && <Component />) || <Register />
  );
};

export default WithAuth;
