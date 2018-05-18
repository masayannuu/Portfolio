import React from 'react'
import MediaQuery from 'react-responsive'
import { Image } from 'reactbulma'

import { Head, Profile, ThreePoints, Work, Sns, Footer } from '../../organisms/index'
import { Rain, Arrow, Bubble } from '../../atoms/Animation/index'
import Umbrella from '../../../../public/umbrella.png'

const LandingPage = () => (
  <div>
    <Bubble />
    <Head />
    <MediaQuery query="(min-device-width: 769px)">
      <Rain targetY={680} isMobile={false} />
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <Rain targetY={200} isMobile />
    </MediaQuery>
    <Image src={Umbrella} is="128x128" />
    <Profile />
    <ThreePoints />
    <Arrow />
    <Work />
    <Sns />
    <Footer />
  </div>
)

export default LandingPage
