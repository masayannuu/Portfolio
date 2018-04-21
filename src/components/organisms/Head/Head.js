import React from 'react'
import { Image } from 'reactbulma'

import MainImage from '../../../../public/main-back.gif'
import Nav from '../../molecules/Nav/Nav'

const Head = () => (
  <div>
    <Nav />
    <Image src={MainImage} square="16by9" />
  </div>
)

export default Head
