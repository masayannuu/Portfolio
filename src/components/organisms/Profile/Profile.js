import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'
import InViewMonitor from 'react-inview-monitor'

import Headline from '../../atoms/Title/Headline'
import StyledSection from '../../atoms/Section/StyledSection'
import Icon from '../../../../public/icon.png'

const StyledParagraph = styled.p`
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
`

const StyledDiv = styled.div`
  @media screen and (min-width: 600px) {
    width: 593px;
  }
`

const StyledImage = styled(Image)`
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 367px;
    float: right;
  }
`

const Profile = () => (
  <StyledSection name="profile">
    <Headline>| PROFILE</Headline>
    <div className="columns">
      <StyledDiv className="column">
        <InViewMonitor
          classNameNotInView="is-invisible"
          classNameInView="animated slideInUp"
        >
          <StyledParagraph>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字
          </StyledParagraph>
        </InViewMonitor>
      </StyledDiv>
      <div className="column">
        <InViewMonitor
          classNameNotInView="is-invisible"
          classNameInView="animated slideInRight"
        >
          <StyledImage src={Icon} />
        </InViewMonitor>
      </div>
    </div>
  </StyledSection>
)

export default Profile
