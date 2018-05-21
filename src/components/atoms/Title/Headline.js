import React from 'react'
import styled from 'styled-components'
import { Title } from 'reactbulma'
import InViewMonitor from 'react-inview-monitor'

const StyledTitle = styled(Title)`
  font-feature-settings: 'palt';
  letter-spacing: 0.2em;
  margin-bottom: 95px !important;
  -webkit-animation-duration: 5s;
  -moz-animation-duration: 5s;
  animation-duration: 5s;
`

const Headline = props => (
  <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInUp">
    <StyledTitle className="is-size-3-mobile is-size-1-desktop is-size-1-tablet is-size-1-widescreen">
      {props.children}
    </StyledTitle>
  </InViewMonitor>
)

export default Headline
