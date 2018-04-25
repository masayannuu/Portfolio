import React from 'react'
import mojs from 'mo-js'

const line = new mojs.Shape({
  shape: 'line',
  radius: 20,
  stroke: '#D1613B',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%': '100%' },
  left: '50%',
  y: 1450,
  angle: '-90',
  fill: 'none',
  duration: 2000
}).then({
  strokeDashoffset: { '100%': '-100%' },
  srtoke: '#D1613B'
})

const head = new mojs.Shape({
  shape: 'zigzag',
  radius: 10,
  radiusY: 21,
  left: '50%',
  y: 1450,
  fill: { none: '#D1613B', easing: 'cubic.in' },
  srtoke: '#D1613B',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%': '100%' },
  stroke: '#D1613B',
  srtokeOpacity: { 1: 0 },
  angle: 180,
  duration: 2000
})

export default class Arrow extends React.Component {
  componentDidMount () {
    new mojs.Timeline({
      repeat: 999
    })
      .add(line, head)
      .play()
  }

  render () {
    return <div />
  }
}
