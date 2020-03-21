import React, { Component } from "react";
import PhoneItem from "./PhoneItem";

class PhoneList extends Component {
  render() {
    const { phoneList, name, tel, addr, my_value } = this.props;

    return (
      <React.Fragment>
        <div>
          <p>전화번호 리스트</p>
          <p>
            {name},{tel},{addr}
          </p>
          <p>리스트의 myValue : {my_value}</p>
        </div>
        <div>
          <PhoneItem phoneList={phoneList} />
        </div>
      </React.Fragment>
    );
  }
}

export default PhoneList;
