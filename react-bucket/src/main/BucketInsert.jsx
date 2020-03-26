import React, { Component } from "react";

class BucketInsert extends Component {
  // input box를 사용하는 component에서 사용자가 입력한 문자열을 임시로 담고 있을 변수 선언
  state = {
    bucket_title: ""
  };

  // 현재 컴포넌트에 선언된 state.bucket_title 변수에 사용자의 입력 문자열을 담는 역할을 수행한다
  // 그러나 여기에 문자열을 담는다고 하여도 다른 컴포넌트에 문자열이 전파되지는 않는다.
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // input box에서 문자열을 입력하는 중 enter 키를 누르면
  // bucketMain에서 전달받은 이벤트 핸들러에게 state.bucket_title 변수값을 전달하여
  // 전체 컴포넌트가 바라보고 있는 배열에 추가하도록 수행을 하자
  handleOnKeyPress = event => {
    const { bucket_add } = this.props;

    if (event.key === "Enter") {
      bucket_add(this.state.bucket_title);

      this.setState({
        bucket_title: ""
      });
    }
  };

  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          {/*  
                    input 박스 처리 방법 
                1. 컴포넌트 자체에 inpt box의 value로 지정할 state 변수를 선언하고
                2. value 속성에 state 변수를 지정하고, 이 순간 input box는 read only 상태로 변한다
                3. 사용자의 입력을 받아서 state에 저장하기 위해 onChange 이벤트 핸들러를 만들어주고 지정해준다.
            */}

          <input
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleOnKeyPress}
            name="bucket_title"
            className="w3-input w3-border w3-hover-light-grey w3-round"
            placeholder="버킷리스트에 추가할 내용을 입력하세요..."
          ></input>
        </div>
      </section>
    );
  }
}

export default BucketInsert;
