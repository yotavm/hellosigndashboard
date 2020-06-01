import React from "react";
import styled from "styled-components";

import { googleSignIn } from "../../services/Auth";
import { ReactComponent as GLogo } from "../../assets/icons/gLogo.svg";

const Auth = () => {
  return (
    <div>
      <GoogleButton onClick={googleSignIn}>
        <GLogo />
      </GoogleButton>
    </div>
  );
};

const GoogleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0;
  padding: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
`;

export default Auth;
