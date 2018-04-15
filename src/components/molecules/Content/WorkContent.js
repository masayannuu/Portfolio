import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'
import InfoTagGroup from './InfoTagGroup'
import CardModal from '../Modal/CardModal'

const WrapDiv = styled.div`
  width: 591px;
`

const StyledTitle = styled(ParagraphTitle)`
  margin-bottom: 0.1rem;
`

const StyledSubTitle = styled(ParagraphTitle)`
  margin-bottom: 1rem;
`
const WorkContent = ({ details }) => (
  <WrapDiv className="columns is-box">
    <div className="column">
      <StyledTitle className="is-size-5 has-text-right">{details.title}</StyledTitle>
      <StyledSubTitle className="is-size-6 has-text-right">{details.sub_title}</StyledSubTitle>
      {details.info_tags.map(info_tag => (
        <InfoTagGroup name={info_tag.name} tags={info_tag.tags} key={info_tag.name} />
      ))}
      <CardModal
        title={details.title}
        imageUrl={details.image_url}
        description={details.description}
        teamData={details.team_data}
      />
    </div>
    <div className="column">
      <Image src={details.image_url} />
    </div>
  </WrapDiv>
)

export default WorkContent
