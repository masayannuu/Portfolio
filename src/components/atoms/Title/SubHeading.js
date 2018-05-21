import React from 'react'
import styled from 'styled-components'
import { SubTitle } from 'reactbulma'

const StyledSubTitle = styled(SubTitle)`
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
`
const SubHeading = props => (
  <StyledSubTitle className="is-size-4-mobile is-size-3-desktop is-size-3-tablet is-size-2-widescreen">
    {props.children}
  </StyledSubTitle>
)

export default SubHeading
