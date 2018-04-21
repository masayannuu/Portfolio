import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'
import InfoTagGroup from './InfoTagGroup'
import CardModal from '../Modal/CardModal'

const WrapDiv = styled.div`
  // width: 591px;
`

const StyledTitle = styled(ParagraphTitle)`
  margin-bottom: 0.1rem;
`

const StyledSubTitle = styled(ParagraphTitle)`
  margin-bottom: 1rem;
`
const WorkContent = ({ content }) => (
  <WrapDiv className="columns is-box">
    <div className="column">
      <StyledTitle className="is-size-5 has-text-right">{content.title}</StyledTitle>
      <StyledSubTitle className="is-size-6 has-text-right">{content.sub_title}</StyledSubTitle>
      {content.info_tags.map(info_tag => (
        <InfoTagGroup name={info_tag.name} tags={info_tag.tags} key={info_tag.name} />
      ))}
      <CardModal
        title={content.title}
        imageUrl={content.image_url}
        description={content.description}
        teamData={content.team_data}
      />
    </div>
    <div className="column">
      <Image src={content.image_url} />
    </div>
  </WrapDiv>
)

WorkContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    sub_title: PropTypes.string,
    info_tags: PropTypes.array,
    image_url: PropTypes.string,
    description: PropTypes.string,
    team_data: PropTypes.shape({
      number: PropTypes.number,
      roll: PropTypes.string,
      work: PropTypes.string
    }).isRequired
  }).isRequired
}

export default WorkContent
