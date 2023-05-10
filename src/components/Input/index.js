import { useState } from 'react'
import GuessResults from '../GuessResults/index.js'
import Banner from '../Banner/index.js'


const Input = ({ answer }) => {
  const [guess, setGuess] = useState('')
  const [guesses, setGuesses] = useState([])
  const [gameWon, setGameWon] = useState(false)

  const handleChange = (e) => {
    const upperCasedGuess = e.target.value.toUpperCase()
    setGuess(upperCasedGuess)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGuess(guess)
    setGuesses((prevGuess) => [...prevGuess, guess])
    checkForWin(guess, answer)
    setGuess('')
  }
  
  const checkForWin = (guess, answer) => {
    if (answer === guess && guesses.length <=6) {
      setGameWon(true)
    } 
  }
  return (
    <>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <div className='guess-results'>
        <GuessResults guesses={guesses} answer={answer}/>
      </div>
      { gameWon && 
          <Banner className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in<strong> {guesses.length} guesses</strong>.
          </p>
          </Banner>
      }
      { !gameWon && guesses.length === 6 &&
          <Banner className='sad banner'>
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </Banner>
      }
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          id='guess-input'
          type='text'
          value={guess}
          onChange={handleChange}
          pattern='^[a-zA-Z]{5}$'
          title='5 letter word'
          disabled={gameWon || guesses.length === 6}
        />
      </form>
    </>
  )
}

export default Input
