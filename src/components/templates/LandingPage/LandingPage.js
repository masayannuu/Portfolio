import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Image } from 'reactbulma'

import { Head, Profile, ThreePoints, Work, Sns, Footer } from '../../organisms/index'
import { Rain, Arrow, Bubble } from '../../atoms/Animation/index'
import Umbrella from '../../../../public/umbrella.png'

class LandingPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contents: props.contents
    }
  }

  render () {
    return (
      <div>
        <Bubble />
        <Head />
        <MediaQuery query="(min-device-width: 1224px)">
          <Rain targetY={680} />
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <Rain targetY={200} />
        </MediaQuery>
        <Image src={Umbrella} is="128x128" />
        <Profile />
        <ThreePoints />
        <Arrow />
        <Work contents={this.state.contents} />
        <Sns />
        <Footer />
      </div>
    )
  }
}

LandingPage.propTypes = {
  contents: PropTypes.array.isRequired
}

export default LandingPage
