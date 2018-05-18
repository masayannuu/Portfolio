import React from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { SocialIcon } from 'react-social-icons'
import InViewMonitor from 'react-inview-monitor'

import { Headline, SubHeading } from '../../atoms/Title/index'
import StyledSection from '../../atoms/Section/StyledSection'

const StyledDiv = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    width: 593px;
  }
`

const StyledIconDiv = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    width: 367px;
  }
`

const WrapDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 0 1em;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-flow: row;
    width: 100%
    height: 200px;
  }
  @media screen and (min-width: 769px) {
    flex-flow: column;
    height: 593px;
  }
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
            screenName: 'masayannu'
          }}
          options={{ height: 593 }}
        />
      </StyledDiv>
      <StyledIconDiv className="column">
        <div id="contact">
          <SubHeading>Contact</SubHeading>
        </div>
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated rubberBand">
          <WrapDiv>
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
          </WrapDiv>
        </InViewMonitor>
      </StyledIconDiv>
    </div>
  </StyledSection>
)

export default Sns
