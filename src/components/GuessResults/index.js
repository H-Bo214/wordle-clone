import { range } from '../../utils.js'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import Guess from '../Guess/index.js'

const GuessResults = ({ guesses }) => {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} />
      })}
    </div>
  )
}

export default GuessResults
