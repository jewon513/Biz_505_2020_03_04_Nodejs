import Moment from "react-moment";
import React, { Component } from "react";

class BucketItemEdit extends Component {
  state = {
    bucket_title: ""
  };

  /*
    view 모드에서 edit 모드로 변경될때 input box에 view 모드에서 보았던 문자열(title)을
    state 변수에 담아 주는 부분
  */

  componentDidMount() {
    const { bucketItem } = this.props;
    this.setState({
      bucket_title: bucketItem.b_title
    });
  }

  onChange = event => {
    this.setState({
      bucket_title: event.target.value
    });
  };

  onKeyPress = event => {
    if (event.key === "Enter") {
      // 현재 리스트의 id 값과 새로 입려한 버킷문자열을 메인으로 전송해서 업데이트를 수행하도록 실시
      this.props.bucket_update(
        this.props.bucketItem.id,
        this.state.bucket_title
      );
      this.props.handleOnEditing();
    }
  };

  render() {
    const { bucketItem } = this.props;

    return (
      <React.Fragment>
        <td>{bucketItem.b_flag_text}</td>
        <td>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td onClick={this.changeEdit}>
          {/* 
            input box에서 기존 b_title 값을 변경하도록 할텐데, 그렇게 하기 위해서는 value 옵션에 state 변수를 포함해야한다.
            그래야만 onChange 이벤트에서 키보드로 입력한 내용을 정상적으로 input box에 보여주도록 할 수 있다.
            
            그러나, state.bucket_title은 초기값이 비어있는 상태이다.
            그렇다면 props로 전달받은 b_title을 state.bucket_title에 주입하여 보여주고 수정 할 수 있도록 해야 하는데,
            props로 받은 값을 state 형 변수에 주입하기 위해서는 Lifecycle method 중에서 componentDidUpdate() 에서 처리를 해주어야 한다.
          */}
          <input
            value={this.state.bucket_title}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
        </td>

        {/* 
              react에서 조건별로 tag를 표시하고자 할때
              { 검사값 ? (true이면) : (false이면)}
            */}

        <td>
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD"> {bucketItem.b_end_date} </Moment>
          ) : (
            "◎"
          )}
        </td>
        <td>
          <input type="checkbox" value={bucketItem.b_cancel} />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemEdit;
