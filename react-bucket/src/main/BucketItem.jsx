import React from "react";
import Moment from "react-moment";

const BucketItem = ({ bucketItem }) => {
  return (
    <tr>
      <td>{bucketItem.b_flag}</td>
      <td>
        <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
      </td>
      <td>{bucketItem.b_title}</td>
      <td>
        <Moment format="YYYY-MM-DD"> {bucketItem.b_end_date} </Moment>
      </td>
      <td>{bucketItem.b_cancel}</td>
    </tr>
  );
};

export default BucketItem;
