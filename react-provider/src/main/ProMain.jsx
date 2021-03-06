import React, { Component } from "react";
import ProSub1 from "./ProSub1";
import ProSub2 from "./ProSub2";
import MessageProvider from "../provider/MessageProvider";

class ProMain extends Component {
  /*
    App 목표
    message 변수를 ProMain 에 연동된 모든 component에 전파하고 어디선가 그 값을 변경하면
    모든 곳에서 같은 값이 보이도록 한다.
  */

  state = {
    message: "나는 Main Message 입니다.",
    ChangeMessage: message => this.ChangeMessage(message)
  };

  // main에서 선언된 state.message 변수를 변경하기 위한 method를 선언
  ChangeMessage = m => {
    this.setState({
      message: m
    });
  };

  render() {
    return (
      <div>
        <h2>나는 Main 입니다</h2>

        <p>{this.state.message}</p>

        <MessageProvider.Provider value={this.state}>
          <ProSub1 />

          <ProSub2 />
        </MessageProvider.Provider>
        {/* ProMain에서 선언된 state.message를 포함된 하위 컴포넌트에게 전달 */}
      </div>
    );
  }
}

export default ProMain;
