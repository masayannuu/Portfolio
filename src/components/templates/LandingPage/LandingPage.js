import React from 'react'
import MediaQuery from 'react-responsive'
import { Image } from 'reactbulma'

import { Head, Profile, ThreePoints, Work, Sns, Footer } from '../../organisms/index'
import { Rain, Arrow, Bubble } from '../../atoms/Animation/index'
import Umbrella from '../../../../public/umbrella.png'

const LandingPage = ({ contents }) => (
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
    <Work contents={contents} />
    <Sns />
    <Footer />
  </div>
)

export default LandingPage
