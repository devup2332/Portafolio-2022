import React from "react";
import SendedEmailContainer from "../containers/SendedEmailContainer/SendedEmailContainer";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";

const SendedEmail = () => {
  return (
    <HomeTemplate title="Sended Email | Diego Rojas">
      <SendedEmailContainer />
    </HomeTemplate>
  );
};

export default SendedEmail;
