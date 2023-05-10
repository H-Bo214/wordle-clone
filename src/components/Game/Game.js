import React from 'react'
import Input from '../Input/index'
import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
export const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  return (
    <>
      <Input answer={answer}/>
    </>
  )
}

export default Game
