import React, { Component } from 'react';
import Feed from './Feed';

class FeedList extends Component {
  render() {

    let feeds = [];
    this.props.feeds.forEach((feed) => {
      feeds.push(
        <Feed
          title={feed.title}
          description={feed.description}
          time={feed.time}
          image={feed.image}
        />
      );
    });

    return (
      <div className="feed-list">
        {[feeds]}
      </div>
    )
  }
}

export default FeedList;
