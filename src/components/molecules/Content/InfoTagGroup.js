import React from 'react'
import PropTypes from 'prop-types'
import { Control, Field } from 'reactbulma'

import InfoTag from '../../atoms/Label/InfoTag'
import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'

const InfoTagGroup = ({ name, tags }) => (
  <Field grouped>
    <dl>
      <dt>
        <ParagraphTitle>{name}</ParagraphTitle>
      </dt>
      <dd>
        <Field grouped className="is-grouped-multiline">
          {tags.map(tag => (
            <Control key={tag}>
              <InfoTag key={tag}>{tag}</InfoTag>
            </Control>
          ))}
        </Field>
      </dd>
    </dl>
  </Field>
)

InfoTagGroup.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}

export default InfoTagGroup
