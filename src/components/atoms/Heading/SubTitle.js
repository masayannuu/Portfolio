import React from 'react'
import styled from 'styled-components'
import { Subtitle } from 'bloomer'

const StyledSubTitle = styled(Subtitle)`
  color: #a2c4c7;
`
const SubTitle = props => <StyledSubTitle isSize={2}>{props.children}</StyledSubTitle>

export default SubTitle
