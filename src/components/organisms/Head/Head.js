import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import MainImage from '../../../../public/main-back.gif'
import Nav from '../../molecules/Nav/Nav'

const StyledDiv = styled.div`
  margin-bottom: 229px;
`

const StyledImage = styled(Image)`
  margin-top: 50px;
`

const Head = () => (
  <StyledDiv>
    <Nav />
    <StyledImage src={MainImage} square="16by9" />
  </StyledDiv>
)

export default Head
