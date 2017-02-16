import React, { Component } from 'react';

class SideBarAddChannel extends Component {
    render(){
        return (<li className="list-group-item side-bar-add-channel" key={this.props.id}>
            <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-plus"></span>
            </button>
        </li>);
    }
}

export default SideBarAddChannel;
