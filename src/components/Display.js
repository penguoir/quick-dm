import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="display">
        {this.props.block ? this.props.block : ''}
      </div>
    )
  }
}

export default Display
