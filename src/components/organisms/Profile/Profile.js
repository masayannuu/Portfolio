import React from 'react'
import styled from 'styled-components'
import { Section, Image } from 'reactbulma'

import Headline from '../../atoms/Title/Headline'
import Icon from '../../../../public/icon.png'

const StyledParagraph = styled.p`
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
`

const StyledDiv = styled.div`
  @media screen and (min-width: 600px) {
    width: 593px;
  }
`

const StyledImage = styled(Image)`
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 367px;
    float: right;
  }
`

const Profile = () => (
  <Section>
    <Headline>| PROFILE</Headline>
    <div className="columns">
      <StyledDiv className="column">
        <StyledParagraph>
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字
        </StyledParagraph>
      </StyledDiv>
      <div className="column">
        <StyledImage src={Icon} />
      </div>
    </div>
  </Section>
)

export default Profile
