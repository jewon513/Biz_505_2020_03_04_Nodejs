import React, { Component } from "react";
import axios from "axios";

class BBsInsert extends Component {
  state = {
    b_title: ""
  };

  // 키보드로 input에 문자를 입력하면 그 문자를 b_title에 저장하라
  handleChange = e => {
    this.setState({ ...this.state, b_title: e.target.value });
  };

  bbsAxiosSubmit = ev => {
    ev.preventDefault();
    const { bbs_main_url } = this.props;
    axios
      .post(bbs_main_url, { b_title: this.state.b_title })
      .then(result => console.log(result))
      .catch(error => console.log(error));
    return false;
  };

  // ajax를 이용해서 서버에 데이터를 보내기
  bbsInsertSubmit = ev => {
    // 기본적으로 수행되는 이벤트를 하지 말라
    // submit을 수행하지 말라
    ev.preventDefault();

    const { bbs_main_url } = this.props;

    // let data = new FormData();
    // data.append("b_title", this.state.b_title);

    fetch(bbs_main_url, {
      method: "POST",
      headers: {
        Accept: "apllication/json",
        "Content-Type": "application/json"
      },
      // JSON.stringify : JSON 객체를 Serialize된 문자열로 변환
      // JSON.parse 와 반대되는 개념이다
      // JSON.parse : JSON 형태의 문자열을 JSON 객체로 변환
      body: JSON.stringify({
        b_title: this.state.b_title
      })
    });

    // 표준 javascript 에서는 return flase를 마지막에 써주면
    return false;
  };

  render() {
    return (
      <form className="w3-container w3-row" onSubmit={this.bbsInsertSubmit}>
        <div className="w3-col s9 w3-padding">
          <input
            className="w3-input"
            value={this.state.b_title}
            onChange={this.handleChange}
          />
        </div>
        <div className="w3-col s2 w3-padding">
          <button className="w3-button w3-blue">저장</button>
        </div>
      </form>
    );
  }
}

export default BBsInsert;
