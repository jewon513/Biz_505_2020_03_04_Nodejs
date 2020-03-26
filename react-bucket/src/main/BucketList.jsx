import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  render() {
    const { bucketList } = this.props;
    const list = bucketList.map(bucket => (
      <BucketItem ket={bucket.id} bucketItem={bucket} />
    ));

    return (
      <section className="w3-container-fluid">
        <table className="w3-table w3-table-all">
          <thead>
            <tr>
              <th>FLAG</th>
              <th>추가일자</th>
              <th>BUCKET</th>
              <th>완료</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </section>
    );
  }
}

export default BucketList;
