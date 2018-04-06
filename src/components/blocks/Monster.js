import React, { Component } from 'react';
import monsters from './monsters'
var stringSimilarity = require('string-similarity')

class Monster extends Component {
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

        <div className="abilities">
          {monster.special_abilities.map((ability, key) => (
            <div key={key} className="ability">
              <b>{ability.name}</b>: {ability.desc}<br />
            </div>
          ))}
          <div className="ability">
            <b>Languages</b>: {monster.languages}
          </div>
          <div className="ability">
            <b>Senses</b>: {monster.senses}
          </div>
          <div className="ability">
            <b>Speed</b>: {monster.speed}
          </div>
          
          {monster.damage_immunities &&
            <div className="ability">
              <b>Damage Immunities</b>: {monster.damage_immunities}
            </div>
          }
          {monster.condition_immunities &&
            <div className="ability">
              <b>Condition Resistances</b>: {monster.condition_immunities}
            </div>
          }
          {monster.damage_resistances &&
            <div className="ability">
              <b>Damage Resistances</b>: {monster.damage_resistances}
            </div>
          }
          {monster.damage_vulnerabilities &&
            <div className="ability">
              <b>Damage Vulnerabilities</b>: {monster.damage_vulnerabilities}
            </div>
          }

        </div>
        <div className="actions">
          {monster.actions.map((action, key) => (
            <div key={key} className="action"><b>{action.name}</b>: {action.desc}<br /></div>
          ))}
        </div>
        
        <div className="stats">
          <div className="stat">
            <p className="heading">Strength</p>
            <p className="title is-5">{
              Math.floor((monster.strength - 10) / 2)} {
                monster.strength_save && 
                <span className="save">({monster.strength_save} save)</span>}
            </p>
          </div>
          <div className="stat">
            <p className="heading">Dexterity</p>
            <p className="title is-5">{
              Math.floor((monster.dexterity - 10) / 2)} {
                monster.dexterity_save && 
                <span className="save">({monster.dexterity_save} save)</span>}
            </p>
        </div>
          <div className="stat">
            <p className="heading">Constitution</p>
            <p className="title is-5">{
              Math.floor((monster.constitution - 10) / 2)} {
                monster.constitution_save && 
                <span className="save">({monster.constitution_save} save)</span>}
            </p>
        </div>
          <div className="stat">
            <p className="heading">Intelligence</p>
            <p className="title is-5">{
              Math.floor((monster.intelligence - 10) / 2)} {
                monster.intelligence_save && 
                <span className="save">({monster.intelligence_save} save)</span>}
            </p>
        </div>
          <div className="stat">
            <p className="heading">Wisdom</p>
            <p className="title is-5">{
              Math.floor((monster.wisdom - 10) / 2)} {
                monster.wisdom_save && 
                <span className="save">({monster.wisdom_save} save)</span>}
            </p>
          </div>
          <div className="stat">
            <p className="heading">Charisma</p>
            <p className="title is-5">{
              Math.floor((monster.charisma - 10) / 2)} {
                monster.charisma_save && 
                <span className="save">({monster.charisma_save} save)</span>}
            </p>
          </div>
        </div>
      </div>
    ) : ''
    } catch (e) {
      return (<div className="monster block">Couldn't find that monster.</div>)
    }
  }
}

export default Monster;