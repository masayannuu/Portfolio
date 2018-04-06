import React from 'react'
import styled from 'styled-components'
import { SubTitle } from 'reactbulma'

const StyledSubTitle = styled(SubTitle)`
  color: #a2c4c7;
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
`
const SubHeading = props => <StyledSubTitle is="2">{props.children}</StyledSubTitle>

export default SubHeading
