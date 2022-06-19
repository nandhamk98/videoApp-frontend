import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useHistory } from "react-router-dom";

const ConnectingButtons = () => {
  const history = useHistory();

  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };

  return (
    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      />
      <ConnectingButton
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
        createRoomButton
      />
    </div>
  );
};

export default ConnectingButtons;
