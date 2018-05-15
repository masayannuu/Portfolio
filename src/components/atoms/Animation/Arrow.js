import React from 'react'
import mojs from 'mo-js'

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
      width: window.innerWidth
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth })
  }

  componentWillMount () {
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)

    const element = document.querySelector('#arrow')
    const line = new mojs.Shape({
      ...line_option,
      y: this.state.width < 480 ? 1300 : 1450,
      parent: element
    }).then({
      strokeDashoffset: { '100%': '-100%' },
      srtoke: '#A2C4C7'
    })

    const head = new mojs.Shape({
      ...head_option,
      y: this.state.width < 480 ? 1300 : 1450,
      parent: element
    })

    const second_line = new mojs.Shape({
      ...line_option,
      y: this.state.width < 480 ? 1350 : 1530,
      parent: element
    }).then({
      strokeDashoffset: { '100%': '-100%' },
      srtoke: '#A2C4C7'
    })

    const second_head = new mojs.Shape({
      ...head_option,
      y: this.state.width < 480 ? 1350 : 1530,
      parent: element
    })

    new mojs.Timeline({
      repeat: 999
    })
      .add(line, head)
      .add(second_line, second_head)
      .play()
  }

  render () {
    return <div id="arrow" />
  }
}
