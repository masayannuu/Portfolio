import React from 'react'
import styled from 'styled-components'
import { Title } from 'bloomer'

const StyledTitle = styled(Title)`
  color: #a2c4c7;
`
const MainTitle = props => <StyledTitle isSize={1}>{props.children}</StyledTitle>

export default MainTitle
