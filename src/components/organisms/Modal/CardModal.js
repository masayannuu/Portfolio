import React from 'react'

import Modal from './Modal'
import ModalLink from '../../atoms/Link/ModalLink'

class CardModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      title: props.title
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
    return (
      <div>
        <ModalLink onClick={this.handleOpenModal} />
        <Modal
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
          title={this.state.title}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet justo in arcu
            efficitur malesuada nec ut diam. Aenean a iaculis eros. Proin nec purus congue, rutrum
            sapien id, sodales ante. Nam imperdiet sapien pretium leo dapibus euismod. Ut ac
            venenatis nunc. Praesent viverra purus vel lacus ullamcorper porta a a augue. Proin
            rhoncus tempus leo sed ultricies. In luctus aliquam placerat. Cras efficitur enim vitae
            vulputate consequat. Nulla tellus est, fringilla quis nisi eu, aliquam finibus eros.
          </p>
        </Modal>
      </div>
    )
  }
}

export default CardModal
