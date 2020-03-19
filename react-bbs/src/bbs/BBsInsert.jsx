import React, { Component } from "react";
import axios from "axios";

class BBsInsert extends Component {
  state = {
    bTitle: ""
  };

  // 키보드로 input에 문자를 입력하면 그 문자를 b_title에 저장하라
  handleChange = e => {
    this.setState({ ...this.state, bTitle: e.target.value });
  };

  bbsAxiosSubmit = () => {
    const { bbs_insert_url } = this.props;
    axios
      .post(bbs_insert_url, { b_title: this.state.bTitle })
      .then(result => console.log(result))
      .catch(error => console.log(error));
    return false;
  };

  // ajax를 이용해서 서버에 데이터를 보내기
  bbsInsertSubmit = () => {
    const { bbs_insert_url } = this.props;
    let data = new FormData();
    data.append("b_title", this.state.bTitle);
    fetch(bbs_insert_url, {
      method: "POST",
      body: data
    });

    return false;
  };

  render() {
    return (
      <form className="w3-container w3-row" onSubmit={this.bbsAxiosSubmit}>
        <div className="w3-col s9 w3-padding">
          <input
            className="w3-input"
            value={this.state.bTitle}
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
