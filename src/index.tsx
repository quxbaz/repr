import React, {FunctionComponent} from 'react'
import {render} from 'react-dom'

// const state = animationState()
// render(<Animation state={state} />, dom)

// (animation, frame) -> animationFrame (component)

// function mult2 (n: number) {
//   return n * 2
// }

// const input = 3
// const output = mult2(2)  // -> 6

// const Props = {
//   number: string,
// }

const Number = ({number, frame}) => (
  <div>{frame}</div>
)

const Mult2 = ({frame}) => {
  <div>Multiply by 2</div>
}

const Animation = ({frame}) => (
  <Number number={2} frame={frame} />
)

let frame = 0

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    frame = Math.max(0, frame - 1)
    renderApp()
  } else if (event.key === 'ArrowRight') {
    frame++
    renderApp()
  }
})

function renderApp () {
  render(
    <Animation frame={frame} />,
    document.getElementById('Main')
  )
}

renderApp()
