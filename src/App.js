import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed';
import FeedList from './FeedList';

class App extends Component {

  constructor() {
    super();
    this.feeds = [
      <Feed
        title="title"
        description="description"
        time="time"
      />
    ];
  }

  render() {
    return (
      <div className="App">
        <FeedList feeds={this.feeds} />
      </div>
    );
  }
}

export default App;
