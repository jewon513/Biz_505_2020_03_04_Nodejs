import React, { Component } from "react";
import BucketItemView from "./BucketItemView";
import BucketItemEdit from "./BucketItemEdit";
import Context from "../provider/BucketProvider";

class BucketItem extends Component {
  state = {
    isEditing: false
  };

  handleOnEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { bucketItem } = this.props;

    const item_cancel = {
      backgroundColor: "yellow"
    };

    return (
      <tr
        onClick={this.handleOnEditing}
        style={bucketItem.b_cancel ? item_cancel : {}}
      >
        {this.state.isEditing ? (
          <BucketItemEdit
            bucketItem={bucketItem}
            handleOnEditing={this.handleOnEditing}
          />
        ) : (
          <BucketItemView
            bucketItem={bucketItem}
            handleOnEditing={this.handleOnEditing}
          />
        )}
      </tr>
    );
  }
}

export default BucketItem;
