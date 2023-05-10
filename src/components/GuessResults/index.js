import { range } from '../../utils.js'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import Guess from '../Guess/index.js'
// import { answer } from '../Game/Game.js'
// import {checkGuess} from '../../game-helpers.js'

const GuessResults = ({ guesses }) => {
  console.log(guesses)
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} />
      })}
    </div>
  )
}

export default GuessResults
