import React, { Component } from 'react';

class Feed extends Component {

  constructor (props) {
    super(props);
    this.onFeedClick = this.onFeedClick.bind(this);
  }

  onFeedClick () {
    this.props.onFeedSelected(this.props.id);
  }

  render () {

    var divStyle = {
        backgroundImage: 'url(' + this.props.image + ')'
    };

    return (
      <div className="feed media well" onClick={this.onFeedClick}>
        <div className="media-left">
          <div className="media-object feed-image" style={divStyle}>
          </div>
        </div>
        <div className="media-body">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <span>{this.props.time}</span>
        </div>
      </div>
    );
  }
}

export default Feed;
