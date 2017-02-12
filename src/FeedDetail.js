import React, { Component } from 'react';

class FeedDetail extends Component {

  constructor(props) {
    super(props);

    this.onGoBack = this.onGoBack.bind(this);
  }

  onGoBack() {
    this.props.onBack();
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.onGoBack}> Go Back</a>
        <h1>{this.props.feed.title}</h1>
      </div>
    );
  }
}

export default FeedDetail;
