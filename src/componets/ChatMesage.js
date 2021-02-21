import React from "react";

function ChatMesage(props) {
  const { text, id } = props.message;
  return <div>{text}</div>;
}

export default ChatMesage;
