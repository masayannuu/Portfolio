import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'
import InfoTagGroup from '../../molecules/Content/InfoTagGroup'
import AppImage from '../../../../public/dataoctopus.png'

const WrapDiv = styled.div`
  width: 591px;
`

const StyledTitle = styled(ParagraphTitle)`
  margin-bottom: 0.1rem;
`

const StyledSubTitle = styled(ParagraphTitle)`
  margin-bottom: 1rem;
`

const Content = ({ heading, sub_heading, info_tags }) => (
  <WrapDiv className="columns">
    <div className="column">
      <StyledTitle className="is-size-5 has-text-right">{heading}</StyledTitle>
      <StyledSubTitle className="is-size-6 has-text-right">{sub_heading}</StyledSubTitle>
      {info_tags.map(info_tag => <InfoTagGroup name={info_tag.name} tags={info_tag.tags} />)}
    </div>
    <div className="column">
      <Image src={AppImage} />
    </div>
  </WrapDiv>
)

export default Content
