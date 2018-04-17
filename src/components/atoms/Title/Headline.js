import React from 'react'
import styled from 'styled-components'
import { Title } from 'reactbulma'

const StyledTitle = styled(Title)`
  font-feature-settings: 'palt';
  letter-spacing: 0.2em;
`
const Headline = props => <StyledTitle>{props.children}</StyledTitle>

export default Headline
