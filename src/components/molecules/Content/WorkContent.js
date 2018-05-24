import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import ParagraphTitle from '../../atoms/Paragraph/ParagraphTitle'
import Modal from '../Modal/Modal'
import ModalLink from '../../atoms/Link/ModalLink'
import ModalBody from '../Modal/ModalBody'

const WrapDiv = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 1280px) {
    width: 593px;
  }
  @media screen and (min-width: 1281px) {
    width: 100%;
  }
`

const StyledTitle = styled(ParagraphTitle)`
  margin-bottom: 0.1rem;
`

const StyledSubTitle = styled(ParagraphTitle)`
  margin-bottom: 0.5rem;
`

const StyledDiv = styled.div`
  margin-top: 1rem;
`

const StyledImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
  width: 100%;
`

class WorkContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: props.content,
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  render () {
    const isTag = typeof this.state.content.information_tags !== 'undefined'
    return (
      <WrapDiv className="columns">
        <div className="column">
          <StyledTitle className="is-size-5 has-text-right">{this.state.content.title}</StyledTitle>
          <StyledSubTitle className="is-size-6 has-text-right">
            {this.state.content.sub_title}
          </StyledSubTitle>
          <div className="tk-a-otf-gothic-bbb-pr6n">
            <Modal
              handleCloseModal={this.handleCloseModal}
              showModal={this.state.showModal}
              title={this.state.content.title}
            >
              <ModalBody
                imageUrl={this.state.content.image_url}
                description={this.state.content.description}
                teamData={this.state.content.team_data}
                informationTags={this.state.content.information_tags}
                isTag={isTag}
              />
            </Modal>
          </div>
        </div>
        <div className="column">
          <StyledImage src={this.state.content.image_url} onClick={this.handleOpenModal} />
          <StyledDiv>
            <ModalLink onClick={this.handleOpenModal} />
          </StyledDiv>
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
