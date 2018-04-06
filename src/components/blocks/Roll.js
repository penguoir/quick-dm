import React, { Component } from 'react';

class Roll extends Component {
  constructor(props) {
    super(props)

    var regex     = /((\d*)?d(\d+)([+-/*]\d+)?){1}/g,
        values    = regex.exec(props.input),
        numOfDice = values[2],
        dice      = values[3],
        modifier  = values[4]

    // Roll dice
    // TODO: Don't repeat on line 16 on 19 (for some reason)
    var total = 0
    total += Math.floor( (Math.random() * dice) + 1)

    for (var i = 1; i < numOfDice; i++) {
      total += Math.floor( (Math.random() * dice) + 1)
    }

    if (modifier) {
      // Add modifier
      total = eval(String(total) + modifier)
    }

    this.state = {
      roll: total, dice: values[0] 
    }
  }

  render() {
    return (
      <div className="roll block">
        { this.state.roll } <span className="roll-info">({ this.state.dice })</span>
      </div>
    )
  }
}

export default Roll;
