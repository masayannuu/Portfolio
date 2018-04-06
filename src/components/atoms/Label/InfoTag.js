import React from 'react'
import styled from 'styled-components'
import { Tag } from 'reactbulma'

const StyledInfo = styled(Tag)`
  font-feature-settings: 'pkna';
  letter-spacing: normal;
`

const InfoTag = props => <StyledInfo className="is-rounded">{props.children}</StyledInfo>

export default InfoTag
