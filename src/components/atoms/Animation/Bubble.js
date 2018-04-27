import React from 'react'
import mojs from 'mo-js'

export default class Bubble extends React.Component {
  componentDidMount () {
    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      parent: document.body,
      radius: 25,
      count: 3,
      children: {
        stroke: '#A2C4C7',
        fill: 'none',
        scale: 1,
        strokeWidth: { 3: 0 },
        radius: { 0: 'rand(8, 12)' },
        degreeShift: 'rand(-50, 50)',
        duration: 400,
        delay: 'rand(0, 250)'
      }
    })

    document.addEventListener('click', e => {
      burst.tune({ x: e.pageX, y: e.pageY }).replay()
    })
  }

  render () {
    return <div />
  }
}
