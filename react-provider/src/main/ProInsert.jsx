import React, { Component } from "react";
import MessageProvider from "../provider/MessageProvider";
import ProFunction from "./ProFunction";

class ProInsert extends Component {
  state = {
    message: "나는 INSERT 컴포넌트"
  };

  static contextType = MessageProvider;

  // 키보드에서 입력을 하면 입력받은 문자열을 this.state.message에 저장해 달라.
  // 자신의 state값만 변경 할 수 있다. setState를 이용해서.
  // props의 값은 자식이 변경할 수 없다.
  // handleChange에서 this.state.message를 변경하면
  // 현재 컴포넌트 어디에 this.state.message가 있던 상관없이 동시에 변경된 값이 표현된다.
  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  // Main -> Sub2 -> 나에게 전달된 ChangeMessage 메서드를 호출하여 지금부터 내가 보내는 문자열을
  // 전체 컴포넌트가 공유하는 message 변수에 적용하라
  messageSend = () => {
    this.context.ChangeMessage(this.state.message);
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <h5>입력박스</h5>
        <label>문자열을 입력하세요</label>
        {/* 
            React에서 input box를 사용하려면 먼저 
            1. value에 value에 포함시킬 state 변수를 선언하고
            2. value = {this.state.변수} 라고 작성하고
            3. onChange 이벤트를 이용하여 키보드에서 입력된 문자열을 this.state.변수에 반영을 시켜준다. (handleChange 함수)
        */}
        <input value={message} onChange={this.handleChange} />
        <button onClick={this.messageSend}>전달</button>
        <p>{message}</p>
        <h4>함수 방식 컴포넌트 가져오기</h4>
        <ProFunction />
      </div>
    );
  }
}

export default ProInsert;
