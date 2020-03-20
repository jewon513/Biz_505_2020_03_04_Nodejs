import React, { Component } from "react";

class BBsListItem extends Component {
  // 클래스의 필드 변수 선언하는 생성자 부분
  // 여기에 state로 설정한 변수는 이 클래스내에서 자유롭게 호출하여 사용할 수 있다.
  state = {
    isEditing: false,
    b_title: ""
  };

  inputClick = ev => {
    ev.stopPropagation();
  };

  toggleEdit = () => {
    //state 변수 읽기
    //this.state로 부터 원하는 변수를 분해하여
    // 변수 이름만으로 사용하기
    // 여러코드에서 변수를 사용해야 할 때
    const { isEditing } = this.state;

    // false -> true, true -> false 로
    this.setState({ isEditing: !isEditing });
  };

  editInput = ev => {
    const { b_title } = this.state;
    this.setState({
      ...this.state,
      b_title: ev.target.value
    });
  };

  // render가 끝나고 나서 호출 되는 메서드
  // prevProps, prevstate
  // render 이전의 값을 보유하고 있다.
  componentDidUpdate(prevProps, prevState) {
    const { bbs } = this.props;
    if (!prevState.isEditing && this.state.isEditing) {
      this.setState({
        b_title: bbs.b_title
      });
    }
  }

  updateHandle = () => {
    const { bbs, bbs_main_url } = this.props;
    const data = {
      _id: bbs._id,
      b_title: this.state.b_title
    };
    fetch(bbs_main_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  deleteHandle = ev => {
    ev.stopPropagation();

    if (window.confirm("데이터를 삭제할까요?")) {
      const { bbs, bbs_main_url } = this.props;
      const data = { _id: bbs._id };
      fetch(bbs_main_url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
  };

  render() {
    const { bbs } = this.props;

    return (
      <tr onClick={this.toggleEdit} data-id={bbs._id}>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>
          {this.state.isEditing ? (
            <div>
              <input
                value={this.state.b_title}
                onClick={this.inputClick}
                onChange={this.editInput}
              />
              <button type="button" onClick={this.updateHandle}>
                완료
              </button>
            </div>
          ) : (
            <span>{bbs.b_title}</span>
          )}
        </td>
        <td>
          <button type="button" onClick={this.deleteHandle}>
            삭제
          </button>
        </td>
      </tr>
    );
  }
}

export default BBsListItem;
