import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  id = 0;

  state = {
    bucketList: [
      {
        id: 0,
        b_flag: "☆",
        b_start_date: "2020-03-26",
        b_end_date: "",
        b_title: "리액트 정복",
        b_end_check: false,
        b_cancel: false
      }
    ]
  };

  // bucketList에 항목을 추가하여 전체 컴포넌트에 전파될 수 있도록 함수를 선언
  // 기존의 객체(배열)은 원본을 손상시키지 말자
  // 객체 배열에 새로운 항목을 추가 : push()
  // 객체 배열에서 항목을 제거 : remove()
  // 객체 배열의 요소중 어떤 항목을 변경 할때 : 객체[index] = 새로운 값

  // 새로운 객체를 만들고 추가 : 기존객체 + 추가된 항목 생성하는 새로운 객체에 복사
  //                      변경 : 기존객체 변경내용만 변경하여 새로운 객체에 복사
  bucket_add = b_title => {
    const { bucketList } = this.state;

    const date = new Date();

    // b_id 값은 버킷 리스트의 PK 값을 갖는 칼럼으로 state에 지정된 id 값을 1 증가시키므로서 생성을 하고
    // 리스트의 컬럼을 해당 값으로 지정
    const bucket = {
      b_id: ++this.id,
      b_flag: "☆",
      b_start_date: date.toString(),
      b_title: b_title
    };

    this.setState({
      bucketList: bucketList.concat({ id: this.id, ...bucket })
    });
  };

  // react lifeCycle 메서드
  // this.state 추가되기 전
  // nextState 추가 된 후
  // 다르면 true 값이 return 되고 비로소 렌더링 됨
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.bucketList !== this.state.bucketList;
  }

  render() {
    return (
      <div>
        <BucketInsert bucket_add={this.bucket_add} />
        <BucketList bucketList={this.state.bucketList} />
      </div>
    );
  }
}

export default BucketMain;
