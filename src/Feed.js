import React, { Component } from 'react';
import moment from 'moment';

class Feed extends Component {

  constructor (props) {
    super(props);
    this.onFeedClick = this.onFeedClick.bind(this);
  }

  onFeedClick () {
    this.props.onFeedSelected(this.props.id);
  }

  render () {

    let divStyle = {
        backgroundImage: 'url(' + this.props.image + ')'
    };

    let date = moment(new Date(this.props.time)).fromNow();

    return (
      <div className="feed media well" onClick={this.onFeedClick}>
        <div className="media-left">
          <div className="media-object feed-image" style={divStyle}>
          </div>
        </div>
        <div className="media-body">
          <h2>{this.props.title}</h2>
          <span>{date}</span>
        </div>
      </div>
    );
  }
}

export default Feed;
