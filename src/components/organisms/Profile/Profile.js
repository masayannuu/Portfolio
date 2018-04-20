import React from 'react'
import styled from 'styled-components'
import { Container, Image } from 'reactbulma'

import Headline from '../../atoms/Title/Headline'
import Icon from '../../../../public/icon.png'

const StyledParagraph = styled.div``

const Profile = () => (
  <Container>
    <Headline>| PROFILE</Headline>
    <div className="columns">
      <div className="column">
        <StyledParagraph>
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字
        </StyledParagraph>
      </div>
      <div className="column">
        <Image src={Icon} square="1by1" />
      </div>
    </div>
  </Container>
)

export default Profile
