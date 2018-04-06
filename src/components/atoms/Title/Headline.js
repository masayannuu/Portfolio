import React from 'react'
import styled from 'styled-components'
import { Title } from 'reactbulma'

const StyledTitle = styled(Title)`
  color: #a2c4c7;
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
`
const Headline = props => <StyledTitle>{props.children}</StyledTitle>

export default Headline
