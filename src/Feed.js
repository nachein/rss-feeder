import React, { Component } from 'react';

class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <span>{this.props.time}</span>
      </div>
    );
  }
}

export default Feed;
