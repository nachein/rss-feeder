import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FeedList from './FeedList';

import feeds from '../feeds.json';
import nytimes from '../nytimes.xml';

class App extends Component {

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                 Feeder
                            </a>
                        </div>
                    </div>
                </nav>
                <FeedList feeds={feeds}/>
            </div>
        );
    }
}

export default App;
