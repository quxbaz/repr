import css from './style.css'
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

const numberFrameData = {
  0: {
    x: 0,
    y: 0,
  },
  10: {
    x: 100,
    y: 100,
  },
  20: {
    x: 50,
    y: 50,
  },
}

const Animation = ({children, frame, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

const Number = ({number, frame}) => {

  const nFrames = Object.keys(numberFrameData).map(n => parseInt(n))
  const low = Math.max(...nFrames.filter(n => n <= frame))
  const high = Math.min(...nFrames.filter(n => n >= frame))

  const left = (numberFrameData[high].x - numberFrameData[low].x)
  const top = (numberFrameData[high].y - numberFrameData[low].y)

  const style = {left, top}

  return (
    <Animation className={css.Number} style={style} frame={frame}>
      <div>{frame}</div>
    </Animation>
  )
}

const Mult2 = ({frame}) => (
  <Animation className={css.Func} frame={frame}>
    <div>Multiply by 2</div>
  </Animation>
)

const CustomAnimation = ({frame}) => (
  <Animation frame={frame}>
    <Number frame={frame} number={2}/>
  </Animation>
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
    <CustomAnimation frame={frame} />,
    document.getElementById('Main')
  )
}

renderApp()
