import React, { Component } from 'react';

import Display from "./components/Display";
import Saved from "./components/Saved";

import config from './config'

import './css/App.css'
import './css/Command.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', preview: '', block: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // Gets input
    var value = e.target.value
    // Sets displayed input as input (this is so i can read what the value of the input is as the user is typing it).
    this.setState({ value: value, block: '' }, () => {
      // For each action in config.js...
      for (var action of config) {
        // ...if it matches its regular expression...
        if (value.match(action.regex)) {
          // ...set display to show whatever action.block is in the display.
          this.setState({
            block: React.createElement(action.block, { input: value }, null)
          })
        }
      }
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <input type="text" className="command" onChange={e => this.handleChange(e) } />
        </div>

        <div className="container">
          <Display block={this.state.block} />
        </div>

        <div className="container">
          <Saved />
        </div>
      </div>
    );
  }
}

export default App;
