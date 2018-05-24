import React from 'react'
import PropTypes from 'prop-types'

const line_option = {
  shape: 'line',
  radius: 20,
  stroke: '#A2C4C7',
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%': '100%' },
  left: '50%',
  angle: '-90',
  fill: 'none',
  duration: 2000
}

const head_option = {
  shape: 'zigzag',
  radius: 10,
  radiusY: 21,
  left: '50%',
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
  constructor (props) {
    super(props)
    this.state = {
      targetY: props.targetY
    }
  }

  componentDidMount () {
    const mojs = require('mo-js')
    const element = document.querySelector('#arrow')
    const createLine = x =>
      new mojs.Shape({
        ...line_option,
        y: this.state.targetY,
        x,
        parent: element
      }).then({
        strokeDashoffset: { '100%': '-100%' },
        srtoke: '#A2C4C7'
      })

    const createHead = x =>
      new mojs.Shape({
        ...head_option,
        y: this.state.targetY,
        x,
        parent: element
      })

    new mojs.Timeline({
      repeat: 999
    })
      .add(
        createLine(30),
        createHead(30),
        createLine(0),
        createHead(0),
        createLine('-30'),
        createHead('-30')
      )
      .play()
  }

  render () {
    return <div id="arrow" />
  }
}

Rain.prototypes = {
  targetY: PropTypes.number
}
