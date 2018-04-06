import Text from './components/blocks/Text';
import Roll from './components/blocks/Roll';
import Monster from './components/blocks/Monster';
import SMonster from './components/blocks/SMonster';

var config = [
  {
    regex: /\/n *(.+)/g,
    block: Text
  },
  {
    regex: /\/d *((\d*)?d(\d+)([+-/*]\d+)?){1}/g,
    block: Roll
  },
  {
    regex: /\/m (.+)/g,
    block: Monster
  },
  {
    regex: /\/ms (.+)/g,
    block: SMonster
  }
]

export default config;
