import { useState } from "@hookstate/core";
import Chatbox from "react-custom-chat";
import store from "./store";

const FirstPerson = () => {
  const { firstPersonMessageList, secondPersonMessageList } = useState(store);

  const handleSendMessage = (newMessage) => {
    firstPersonMessageList.merge([{ text: newMessage, person: "primary" }]);
    setTimeout(() => {
      secondPersonMessageList.merge([
        { text: newMessage, person: "secondary" },
      ]);
    }, 500);
  };
  return (
    <Chatbox
    messageList={firstPersonMessageList.get()}
      onSendMessage={handleSendMessage}
      settings={{
        position: "left",
        navColor: "green",
        navText: "Atwine Tweena",
        isOpen: true,
      }}
    />
  );
};
export default FirstPerson;
