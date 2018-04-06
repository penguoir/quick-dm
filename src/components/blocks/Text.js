import React, { Component } from 'react';

class Text extends Component {
  constructor (props) {
    super(props)
    this.state = { text: /\/n *(.+)/g.exec(props.input)[1] }
  }

  render() {
    return (
      <div className="text block">
        { this.state.text } 
      </div>
    )
  }
}

export default Text;
