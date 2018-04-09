import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Control, Field } from 'reactbulma'

import InfoTag from '../../atoms/Label/InfoTag'
import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'

const TagGroupField = styled(Field)`
  width: 200px;
`

const InfoTagGroup = ({ name, tags }) => (
  <Field grouped>
    <ParagraphTitle>{name}</ParagraphTitle>
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
