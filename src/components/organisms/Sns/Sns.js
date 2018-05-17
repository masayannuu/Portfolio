import React from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { SocialIcon } from 'react-social-icons'
import InViewMonitor from 'react-inview-monitor'

import { Headline, SubHeading } from '../../atoms/Title/index'
import StyledSection from '../../atoms/Section/StyledSection'

const StyledDiv = styled.div`
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 593px;
  }
`

const StyledIconDiv = styled.div`
  text-align: center;
  @media screen and (min-width: 300px) {
    width: 80%;
  }
  @media screen and (min-width: 600px) {
    width: 367px;
  }
`

const WrapDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-flow: column;
  margin: 0 0 1em;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  align-items: center;
  height: 593px;
`

const ContentDiv = styled.div`
  padding: 1em;
  margin: 0.5em;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  &:hover {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
  }
`

const Sns = () => (
  <StyledSection id="sns">
    <Headline>| SNS</Headline>
    <div className="columns">
      <StyledDiv className="column">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'masayannu',
          }}
          options={{ height: 593 }}
        />
      </StyledDiv>
      <StyledIconDiv className="column">
        <WrapDiv>
          <div id="contact">
            <SubHeading>Contact</SubHeading>
          </div>
          <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated rubberBand">
            <ContentDiv>
              <SocialIcon url="https://twitter.com/masayannu" color="black" />
            </ContentDiv>
            <ContentDiv>
              <SocialIcon url="https://github.com/masayannuu" color="black" />
            </ContentDiv>
            <ContentDiv>
              <SocialIcon url="https://www.facebook.com/masaya.morimoto.18" color="black" />
            </ContentDiv>
            <ContentDiv>
              <SocialIcon url="https://www.instagram.com/masayannuu/" color="black" />
            </ContentDiv>
          </InViewMonitor>
        </WrapDiv>
      </StyledIconDiv>
    </div>
  </StyledSection>
)

export default Sns
