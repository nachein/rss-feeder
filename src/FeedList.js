import React, { Component } from 'react';

class FeedList extends Component {
  render() {
    return (
      <div className="feed-list">
        {[this.props.feeds]}
      </div>
    )
  }
}

export default FeedList;
