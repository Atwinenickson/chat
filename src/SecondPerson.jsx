import { useState } from "@hookstate/core";
import Chatbox from "react-custom-chat";
import store from "./store";

const SecondPerson = () => {
  const { firstPersonMessageList, secondPersonMessageList } = useState(store);

  const handleSendMessage = (newMessage) => {
    secondPersonMessageList.merge([{ text: newMessage, person: "primary" }]);
    setTimeout(() => {
      firstPersonMessageList.merge([
        { text: newMessage, person: "secondary" },
      ]);
    }, 500);
  };
  return (
    <Chatbox
    messageList={secondPersonMessageList.get()}
      onSendMessage={handleSendMessage}
      settings={{
        position: "right",
        navColor: "blue",
        navText: "Nickson Tigidi",
        isOpen: true,
      }}
    />
  );
};
export default SecondPerson;
