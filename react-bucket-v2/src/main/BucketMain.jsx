import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";
import Context from "../provider/BucketProvider";

class BucketMain extends Component {
  id = 0;

  state = {
    bucketList: [
      {
        id: 0,
        b_flag: "0",
        b_flag_text: "☆",
        b_start_date: "2020-03-26",
        b_end_date: "",
        b_title: "리액트 정복",
        b_end_check: false,
        b_cancel: false
      }
    ],
    changeFlag: id => this.changeFlag(id),
    bucket_add: b_title => this.bucket_add(b_title),
    bucket_update: (id, b_title) => this.bucket_update(id, b_title),
    bucket_complet: (id, b_end_date) => this.bucket_complet(id, b_end_date),
    toggleCancel: id => this.toggleCancel(id)
  };

  componentDidMount() {
    const strBucketList = localStorage.bucketList;
    if (strBucketList) {
      const jsonBucketList = JSON.parse(strBucketList);
      this.setState({
        bucketList: jsonBucketList
      });
      this.id = jsonBucketList.length;
    }
  }

  componentDidUpdate(preProps, preState) {
    // 객체를 통체로 json 문자열로 변경
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);

    // web 브라우저에 내장 DB에 문자열 저장 이때 key : bucketList
    if (preString !== thisString) {
      localStorage.bucketList = thisString;
    }
  }

  changeFlag = id => {
    const b_flag = ["☆", "★", "○", "●"];

    this.setState({
      bucketList: this.state.bucketList.map(bucket => {
        if (bucket.id === id) {
          let flag = ++bucket.b_flag % 4;
          let flagText = b_flag[flag];

          return { ...bucket, b_flag_text: flagText, b_flag: flag };
        } else {
          return bucket;
        }
      })
    });
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
      b_flag: "0",
      b_flag_text: "☆",
      b_start_date: date.toString(),
      b_title: b_title,
      b_end_check: false,
      b_cancel: false,
      b_end_date: ""
    };

    this.setState({
      bucketList: bucketList.concat({ id: ++this.id, ...bucket })
    });
  };

  // bucketList를 map으로 반복 실행하면서 각요소의 id값과 매개변수로 받은 id 값이 일치하면
  // b_title만 새로운 값으로 변경하여 리턴하라
  bucket_update = (id, b_title) => {
    const { bucketList } = this.state;

    this.setState({
      bucketList: bucketList.map(bucket =>
        bucket.id === id ? { ...bucket, b_title: b_title } : bucket
      )
    });
  };

  // 완료선택이 이루어 지면 bucketList를 map으로 반복하면서
  // id 값과 일치하는 항목을 찾고
  // 있으면 해당 항목을 변경하는 작업을 수행
  bucket_complet = (id, b_end_date) => {
    const { bucketList } = this.state;

    this.setState({
      bucketList: bucketList.map(bucket => {
        // id값과 일치하는 리스트가 있는가
        if (bucket.id === id) {
          const date = new Date();
          // 현재 항목의 b_end_Date 값이 없는가? 없다면 date를 입력하라
          const end_date = bucket.b_end_date === "" ? date : "";
          return { ...bucket, b_end_date: end_date };
        } else {
          return bucket;
        }
      })
    });
  };

  toggleCancel = id => {
    const { bucketList } = this.state;

    this.setState({
      bucketList: bucketList.map(bucket => {
        if (bucket.id === id) {
          return { ...bucket, b_cancel: !bucket.b_cancel };
        } else {
          return bucket;
        }
      })
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
        <Context.Provider value={this.state}>
          <BucketInsert />
          <BucketList />
        </Context.Provider>
      </div>
    );
  }
}

export default BucketMain;
