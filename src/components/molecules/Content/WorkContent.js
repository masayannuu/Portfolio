import React from 'react'
import styled from 'styled-components'
import { Image, Icon, Field } from 'reactbulma'

import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'
import InfoTagGroup from './InfoTagGroup'
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

const StyledField = styled(Field)`
  margin-right: 0.8rem;
  justify-content: flex-end !important;
  font-size: 0.9rem;
  position: relative;
  &:hover {
    cursor: pointer;
    color: #a2c4c7;
  }
`

const WorkContent = ({ heading, sub_heading, info_tags }) => (
  <WrapDiv className="columns is-box">
    <div className="column">
      <StyledTitle className="is-size-5 has-text-right">{heading}</StyledTitle>
      <StyledSubTitle className="is-size-6 has-text-right">{sub_heading}</StyledSubTitle>
      {info_tags.map(info_tag => (
        <InfoTagGroup name={info_tag.name} tags={info_tag.tags} key={info_tag.name} />
      ))}
      <StyledField grouped>
        <Icon>
          <i className="fa fa-angle-right" />
        </Icon>
        Click & More
      </StyledField>
    </div>
    <div className="column">
      <Image src={AppImage} />
    </div>
  </WrapDiv>
)

export default WorkContent
