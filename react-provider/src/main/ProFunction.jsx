import React, { useContext } from "react";
import NPro from "../provider/MessageProvider";

const ProFunction = () => {
  const messageContext = useContext(NPro);

  return (
    <div>
      <p>나는 함수형 컴포넌트</p>
      <p>{messageContext.message}</p>
    </div>
  );
};

export default ProFunction;
