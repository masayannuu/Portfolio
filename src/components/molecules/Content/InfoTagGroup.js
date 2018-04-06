import React from 'react'
import styled from 'styled-components'
import { Control, Field } from 'reactbulma'
import InfoTag from '../../atoms/Label/InfoTag'

const StyledTitle = styled.p`
  margin-right: 0.8rem;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
`

const InfoTagGroup = ({ name, tags }) => (
  <Field grouped className="is-grouped-multiline">
    <StyledTitle>{name}</StyledTitle>
    {tags.map(tag => (
      <Control>
        <InfoTag>{tag}</InfoTag>
      </Control>
    ))}
  </Field>
)

export default InfoTagGroup
