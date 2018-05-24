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
    <MediaQuery query="(min-width: 1701px)">
      <Rain targetY={900} isMobile={false} />
    </MediaQuery>
    <MediaQuery query="(min-width: 1282px) and (max-width: 1700px)">
      <Rain targetY={800} isMobile={false} />
    </MediaQuery>
    <MediaQuery query="(min-width: 769px) and (max-width: 1281px)">
      <Rain targetY={680} isMobile={false} />
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <Rain targetY={200} isMobile />
    </MediaQuery>
    <Image src={Umbrella} is="128x128" />
    <Profile />
    <MediaQuery query="(min-width: 1701px)">
      <Arrow targetY={1700} />
    </MediaQuery>
    <MediaQuery query="(min-width: 1282px) and (max-width: 1700px)">
      <Arrow targetY={1600} />
    </MediaQuery>
    <MediaQuery query="(min-width: 769px) and (max-width: 1281px)">
      <Arrow targetY={1550} />
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <Arrow targetY={1500} />
    </MediaQuery>
    <ThreePoints />
    <Work />
    <Sns />
    <Footer />
  </div>
)

export default LandingPage
