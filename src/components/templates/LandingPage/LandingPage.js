import React from 'react'
import { Container } from 'reactbulma'

import { Head, Profile, Work, Sns, Footer } from '../../organisms/index'

const LandingPage = ({ contents }) => (
  <div>
    <Head />
    <Profile />
    <Work contents={contents} />
    <Sns />
    <Footer />
  </div>
)

export default LandingPage
