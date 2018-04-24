import React from 'react'
import PropTypes from 'prop-types'
import mojs from 'mo-js'

const rainDrop = targetY =>
  new mojs.Shape({
    shape: 'circle',
    fill: 'none',
    radius: 1,
    scaleY: 'rand(1, 3)',
    stroke: '#057D9F',
    strokeLinecap: 'round',
    opacity: { 0.8: 0.5, easing: 'cubic.out' },
    scale: { 1: 0, eacing: 'cubic.out' },
    y: { [-300]: targetY },
    x: 'rand(-300, 300)',
    delay: 'rand(0, 5000)',
    duration: 1500
  }).then({
    radius: 15,
    stroke: '#057D9F',
    strokeWidth: 0.8,
    opacity: { 1: 0, easing: 'cubic.out' },
    scaleX: { 0: 5, eacing: 'cubic.out' },
    scaleY: { 0: 1.5, eacing: 'cubic.out' },
    y: targetY,
    duration: 2000
  })

const timeline = new mojs.Timeline({
  repeat: 999
})

export default class Rain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      targetY: props.targetY
    }
  }

  componentDidMount () {
    for (let count = 0; count < 10; count++) {
      timeline.add(rainDrop(this.state.targetY))
    }
    timeline.play()
  }

  render () {
    return <div />
  }
}

Rain.prototypes = {
  targetY: PropTypes.number
}

Rain.defaultProps = {
  targetY: 0
}
