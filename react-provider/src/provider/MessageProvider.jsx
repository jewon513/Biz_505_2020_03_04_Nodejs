import React, { createContext } from "react"; //

// main에서 하위 컴포넌트에게 전달할 변수와 메서드를 포함하는 Provider를 선언
const MessageProvider = createContext({
  message: "",
  ChangeMessage: message => {}
});

export default MessageProvider;
