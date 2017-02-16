import React, { Component } from 'react';

import SideBarChannel from './SideBarChannel';
import SideBarAddChannel from './SideBarAddChannel';

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

    channels.push(<SideBarAddChannel id="add-channel" />);

    return (
      <div className="side-bar well col-md-1">
        <span className="side-bar-title text-center">CHANNELS</span>
        <ul className="list-group">
          {channels}
        </ul>
      </div>
    );
  }
}

export default SideBar;
