import React, { Component } from "react";
import ProInsert from "./ProInsert";
import MessageProvider from "../provider/MessageProvider";

class ProSub2 extends Component {
  static contextType = MessageProvider;

  render() {
    // const { message, ChangeMessage } = this.props;
    const { message } = this.context;

    return (
      <div>
        <h3>나는 Sub2 입니다</h3>
        <p>Sub2 : {message}</p>
        <p>나는 "{message}" 를 ProInsert에게 전달합니다.</p>
        <ProInsert />
      </div>
    );
  }
}

export default ProSub2;
