import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Control, Field } from 'reactbulma'
import InfoTag from '../../atoms/Label/InfoTag'

const StyledTitle = styled.p`
  margin-right: 0.8rem;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
`

const TagGroupField = styled(Field)`
  width: '150px';
`

const InfoTagGroup = ({ name, tags }) => (
  <Field grouped className="is-grouped-multiline">
    <StyledTitle>{name}</StyledTitle>
    <TagGroupField grouped className="is-grouped-multiline">
      {tags.map(tag => (
        <Control key={tag}>
          <InfoTag key={tag}>{tag}</InfoTag>
        </Control>
      ))}
    </TagGroupField>
  </Field>
)

InfoTagGroup.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}

export default InfoTagGroup
