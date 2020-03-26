import React, { Component } from "react";
import BucketItemView from "./BucketItemView";
import BucketItemEdit from "./BucketItemEdit";

class BucketItem extends Component {
  state = {
    isEditing: false
  };

  handleOnEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { bucketItem } = this.props;

    return (
      <tr>
        {this.state.isEditing ? (
          <BucketItemEdit
            bucket_update={this.props.bucket_update}
            bucketItem={bucketItem}
            handleOnEditing={this.handleOnEditing}
          />
        ) : (
          <BucketItemView
            bucketItem={bucketItem}
            handleOnEditing={this.handleOnEditing}
            changeFlag={this.props.changeFlag}
          />
        )}
      </tr>
    );
  }
}

export default BucketItem;
