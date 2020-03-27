import Moment from "react-moment";
import React, { Component } from "react";
import Context from "../provider/BucketProvider";

class BucketItemView extends Component {
  static contextType = Context;

  noChangeEidt = event => {
    event.stopPropagation();
  };

  changeEdit = event => {
    event.stopPropagation();
    const { bucketItem } = this.props;

    if (bucketItem.b_cancel) {
      alert("취소된 버킷은 수정할 수 없습니다.");
      return false;
    }

    if (bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 수정할 수 없습니다.");
      return false;
    }
    this.props.handleOnEditing();
  };

  handleChangeFlag = event => {
    event.stopPropagation();
    // this.props.changeFlag(this.props.bucketItem.id);
    const { bucketItem } = this.props;
    const { changeFlag } = this.context;
    console.log(bucketItem.id);
    changeFlag(bucketItem.id);
  };

  onComplete = event => {
    event.stopPropagation();

    const { bucket_complet } = this.context;
    const { id, b_end_date } = this.props.bucketItem;

    if (this.props.bucketItem.b_cancel) {
      alert("취소한 버킷은 완료할 수 없습니다.");
      return false;
    }

    if (b_end_date === "") {
      if (!window.confirm("꿈을 이루었습니까?")) {
        return false;
      }
    } else {
      if (!window.confirm("버킷 리스트를 다시 시작할까요?")) {
        return false;
      }
    }
    bucket_complet(id, b_end_date);
  };

  toggleCancel = event => {
    if (window.confirm("버킷을 취소하시겠습니까?")) {
      this.context.toggleCancel(this.props.bucketItem.id);
      return false;
    }

    if (this.props.bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 취소할 수 없습니다.");
      return false;
    }
  };

  render() {
    const { bucketItem } = this.props;

    const td_style = {
      cursor: "Pointer"
    };

    const td_through = {
      cursor: "Pointer",
      textDecorationLine: "line-through",
      textDecorationStyle: "double",
      textDecorationColor: "black",
      color: "red"
    };

    return (
      <React.Fragment>
        <td style={td_style} onClick={this.handleChangeFlag}>
          {bucketItem.b_flag_text}
        </td>
        <td onClick={this.noChangeEidt}>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td
          style={bucketItem.b_end_date !== "" ? td_through : td_style}
          onClick={this.changeEdit}
        >
          {bucketItem.b_title}
        </td>

        {/* 
            react에서 조건별로 tag를 표시하고자 할때
            { 검사값 ? (true이면) : (false이면)}
          */}

        <td style={td_style} onClick={this.onComplete}>
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
          ) : (
            "◎"
          )}
        </td>
        <td onClick={this.noChangeEidt}>
          <input
            onClick={this.toggleCancel}
            type="checkbox"
            checked={bucketItem.b_cancel}
          />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemView;
