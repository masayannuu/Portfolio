import React from 'react'
import PropTypes from 'prop-types'

import Modal from './Modal'
import ModalLink from '../../atoms/Link/ModalLink'
import ModalBody from './ModalBody'

class CardModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      title: props.title,
      imageUrl: props.imageUrl,
      description: props.description,
      teamData: props.teamData,
      informationTags: props.informationTags
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
    const isTag = typeof this.state.informationTags !== 'undefined'
    return (
      <div className="tk-a-otf-gothic-bbb-pr6n">
        <ModalLink onClick={this.handleOpenModal} />
        <Modal
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
          title={this.state.title}
        >
          <ModalBody
            imageUrl={this.state.imageUrl}
            description={this.state.description}
            teamData={this.state.teamData}
            informationTags={this.state.informationTags}
            isTag={isTag}
          />
        </Modal>
      </div>
    )
  }
}

CardModal.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamData: PropTypes.shape({
    number: PropTypes.number,
    roll: PropTypes.string,
    work: PropTypes.string
  }).isRequired
}

export default CardModal
