import { range } from '../../utils.js'
import {checkGuess} from '../../game-helpers.js'
import { answer } from '../Game/Game.js'

const Guess = ({ value }) => {
  const result = checkGuess(value, answer)
  return (
    <p className='guess'>
      {range(5).map((num) => {
        let style = 'cell'
        if (result !== null) {
          style = `cell ${result[num].status}`
        }
       return <span className={style} key={num}>
          {!value ? ' ' : value[num]}
        </span>
      })
      }
    </p>
  )
}

export default Guess
