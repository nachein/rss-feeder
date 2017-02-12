import React, { Component } from 'react';
import moment from 'moment';

class FeedDetail extends Component {

  constructor(props) {
    super(props);

    this.onGoBack = this.onGoBack.bind(this);
  }

  onGoBack() {
    this.props.onBack();
  }

  render() {

    let description = (<div className="feed-description" dangerouslySetInnerHTML={{__html: this.props.feed.description}}></div>);
    let date = moment(new Date(this.props.feed.pubDate)).fromNow();

    return (
      <div>
        <a href="#" onClick={this.onGoBack}> Go Back</a>
        <p>{date}</p>
        <h1>{this.props.feed.title}</h1>
        {description}
      </div>
    );
  }
}

export default FeedDetail;
