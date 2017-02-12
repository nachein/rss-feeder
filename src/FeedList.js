import React, { Component } from 'react';
import Feed from './Feed';

class FeedList extends Component {

  constructor(props) {
      super(props);

      this.onFeedClick = this.onFeedClick.bind(this);
  }

  onFeedClick(id) {
      this.props.onFeedSelected(id);
  }

  render() {

    let feeds = [];
    this.props.feeds.forEach((feed, index) => {
      feeds.push(
        <Feed
          title={feed.title}
          description={feed.description}
          time={feed.pubDate}
          image={feed.image}
          key={index}
          id={index}
          onFeedSelected={this.onFeedClick}
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
