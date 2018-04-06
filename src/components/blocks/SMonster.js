import React, { Component } from 'react';
import monsters from './monsters'
var stringSimilarity = require('string-similarity')

class SMonster extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    try {
    var input = this.props.input
    var monsterNames = monsters.map(x => x.name)
    var monsterName = stringSimilarity.findBestMatch(input, monsterNames).bestMatch.target

    var monster = monsters.filter(x => x.name == monsterName)[0]

    return monster ? (
      <div className="monster block" contentEditable="true">
        <h1>{monster.name}</h1>
        <h2>{monster.size} {monster.type} {monster.subtype && '(' + monster.subtype + ')'}</h2>

        <div className="critical">
          <div>
            <p>HP</p>
            <h3>{monster.hit_points}</h3>
          </div>
          <div>
            <p>AC</p>
            <h3>{monster.armor_class}</h3>
          </div>
          <div>
            <p>CR</p>
            <h3>{monster.challenge_rating}</h3>
          </div>
        </div>

        <div className="actions" style={{width: '100%'}}>
          {monster.actions.map((action, key) => (
            <div key={key} className="action"><b>{action.name}</b>: {action.desc}<br /></div>
          ))}
        </div>
      </div>
    ) : ''
    } catch (e) {
      return (<div className="monster block">Couldn't find that monster.</div>)
    }
  }
}

export default SMonster;