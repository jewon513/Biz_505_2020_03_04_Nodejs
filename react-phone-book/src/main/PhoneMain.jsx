import React, { Component } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";
// import PropTypes from "prop-types";

class PhoneMain extends Component {
  id = 2;

  // 진리의 원천()
  state = {
    phoneList: [
      {
        id: 0,
        name: "나",
        phone: "010-4195-2067"
      },
      {
        id: 0,
        name: "나미춘",
        phone: "010-2222-2222"
      }
    ],

    my_value: ""
  };

  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}

  my_value_change = my_value => {
    this.setState({ my_value: my_value });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h2>MY PHONE BOOK</h2>
        </header>
        <seciotn>
          <PhoneInsert
            my_value={this.state.my_value}
            my_value_change={this.my_value_change}
          />
          <PhoneList
            phoneList={this.state.phoneList}
            my_value={this.state.my_value}
            name="홍길동"
            tel="12345"
            addr="서울특별시"
          />
        </seciotn>
      </React.Fragment>
    );
  }
}

// PhoneMain.propTypes = {};

export default PhoneMain;
