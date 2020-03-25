import React, { Component } from "react";
import MessageProvider from "../provider/MessageProvider";

class ProSub1 extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = MessageProvider;

  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}

  render() {
    // 수신(전달받은) 변수를 this.props.message라고 쓰니 너무 길어서 불편하다
    // 그래서 받은 변수를 분해하여 비 구조화를 실시한다.
    // const { message } = this.props;
    const { message } = this.context;

    return (
      <div>
        <h3>나는 Sub1 입니다</h3>
        {/* 아무런 선언도 하지 않고 ProMain에서 보낸 변수를 원본 그대로 수신하는 방법 */}
        <p>Sub1 : {this.context.message}</p>
        <p>Sub1 : {message}</p>
      </div>
    );
  }
}

export default ProSub1;
