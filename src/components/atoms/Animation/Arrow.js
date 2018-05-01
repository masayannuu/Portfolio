import React from 'react'
import mojs from 'mo-js'

const line_option = {
  shape: 'line',
  radius: 20,
  stroke: '#A2C4C7',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%': '100%' },
  left: '50%',
  y: 1450,
  angle: '-90',
  fill: 'none',
  duration: 2000
}

const head_option = {
  shape: 'zigzag',
  radius: 10,
  radiusY: 21,
  left: '50%',
  y: 1450,
  fill: { none: '#A2C4C7', easing: 'cubic.in' },
  srtoke: '#A2C4C7',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%': '100%' },
  stroke: '#A2C4C7',
  srtokeOpacity: { 1: 0 },
  angle: 180,
  duration: 2000
}

export default class Arrow extends React.Component {
  componentDidMount () {
    const element = document.querySelector('#arrow')
    const line = new mojs.Shape({
      ...line_option,
      parent: element
    }).then({
      strokeDashoffset: { '100%': '-100%' },
      srtoke: '#A2C4C7'
    })

    const head = new mojs.Shape({
      ...head_option,
      parent: element
    })

    const second_line = new mojs.Shape({
      ...line_option,
      y: 1530,
      parent: element
    }).then({
      strokeDashoffset: { '100%': '-100%' },
      srtoke: '#A2C4C7'
    })

    const second_head = new mojs.Shape({
      ...head_option,
      y: 1530,
      parent: element
    })

    new mojs.Timeline({
      repeat: 999
    })
      .add(line, head, second_line, second_head)
      .play()
  }

  render () {
    return <div id="arrow" />
  }
}
