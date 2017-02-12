import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './AppBar';
import SideBar from './SideBar';
import FeedList from './FeedList';
import FeedDetail from './FeedDetail';

import feeds from '../feeds.json';
import channels from '../channels.json';

class App extends Component {

    constructor() {
      super();
      this.state = {
        currentFeed: null,
        currentChannel: null
      };

      this.onFeedSelected = this.onFeedSelected.bind(this);
      this.onChannelSelected = this.onChannelSelected.bind(this);
      this.backToList = this.backToList.bind(this);
    }

    onFeedSelected(index) {
      this.setState({
        currentFeed: index
      });
    }

    onChannelSelected(id) {
      this.setState({
        currentChannel: id,
        currentFeed: null
      });
    }

    backToList() {
      this.setState({
        currentFeed: null
      })
    }

    getChannelFeeds (id) {

      return feeds.filter((feed) => {
        return feed.channel == id;
      });
    }

    getCurrentChannel() {
      return channels.find((channel) => {
        return channel.id == this.state.currentChannel;
      });
    }

    render() {

      let content;

      if(!this.state.currentChannel) {
        content = <div> hello world </div>;
      }
      else if(!this.state.currentFeed) {
        content = <FeedList
                    channel={this.getCurrentChannel()}
                    feeds={this.getChannelFeeds(this.state.currentChannel)}
                    onFeedSelected={this.onFeedSelected}
                  />;
      }
      else {
        let feed = feeds[this.state.currentFeed];
        content = <FeedDetail
                    feed={feed}
                    onBack={this.backToList}
                  />
      }

      return (
          <div className="App">
              <AppBar />
              <div className="app-body">
                <SideBar
                  channels={channels}
                  onChannelChange={this.onChannelSelected}
                />
                <div className="col-md-11">
                  {content}
                </div>
              </div>
          </div>
      );
    }
}

export default App;
