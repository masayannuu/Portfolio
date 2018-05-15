import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'
import CardModal from '../Modal/CardModal'

const WrapDiv = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 593px;
  }
`

const StyledTitle = styled(ParagraphTitle)`
  margin-bottom: 0.1rem;
`

const StyledSubTitle = styled(ParagraphTitle)`
  margin-bottom: 1rem;
`

class WorkContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <WrapDiv className="columns">
        <div className="column">
          <StyledTitle className="is-size-5 has-text-right">{this.state.content.title}</StyledTitle>
          <StyledSubTitle className="is-size-6 has-text-right">
            {this.state.content.sub_title}
          </StyledSubTitle>
          <CardModal
            title={this.state.content.title}
            imageUrl={this.state.content.image_url}
            description={this.state.content.description}
            teamData={this.state.content.team_data}
            informationTags={this.state.content.information_tags}
          />
        </div>
        <div className="column">
          <Image src={this.state.content.image_url} />
        </div>
      </WrapDiv>
    )
  }
}

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
