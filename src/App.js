import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './AppBar';
import FeedList from './FeedList';
import FeedDetail from './FeedDetail';

import feeds from '../feeds.json';

class App extends Component {

    constructor() {
      super();
      this.state = {
        currentFeed: -1
      };

      this.onFeedSelected = this.onFeedSelected.bind(this);
      this.backToList = this.backToList.bind(this);
    }

    onFeedSelected(index) {
      this.setState({
        currentFeed: index
      });
    }

    backToList() {
      this.setState({
        currentFeed: -1
      })
    }

    render() {

      let content;

      if(this.state.currentFeed < 0) {
        content = <FeedList feeds={feeds} onFeedSelected={this.onFeedSelected}/>;
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
              {content}
          </div>
      );
    }
}

export default App;
