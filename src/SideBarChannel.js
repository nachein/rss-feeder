import React, { Component } from 'react';

class SideBarChannel extends Component {

  constructor (props) {
    super(props);
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked () {
    this.props.onChannelSelected(this.props.channel.id);
  }

  render () {
    return (
      <li key={this.props.channel.id} onClick={this.onClicked}> {this.props.channel.title}</li>
    );
  }
}

export default SideBarChannel;
