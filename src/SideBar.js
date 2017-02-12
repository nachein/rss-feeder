import React, { Component } from 'react';

import SideBarChannel from './SideBarChannel';

class SideBar extends Component {

  constructor (props) {
    super(props);
    this.onChannelSelected = this.onChannelSelected.bind(this);
  }

  onChannelSelected (channelId) {
    this.props.onChannelChange(channelId);
  }

  render () {

    let channels = [];
    this.props.channels.forEach((channel, index) => {
      channels.push(
        <SideBarChannel
          key={index}
          channel={channel}
          onChannelSelected={this.onChannelSelected}
        />
      );
    });
    return (
      <div className="side-bar well col-md-1">
        SIDE BAR
        <ul>
          {channels}
        </ul>
      </div>
    );
  }
}

export default SideBar;