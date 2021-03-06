import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Delete } from 'reactbulma'

const Modal = ({
  children, handleCloseModal, showModal, title
}) => {
  if (!showModal) {
    return null
  }

  const StyledBack = styled.div`
    background-color: #a2c4c7;
  `

  const StyledHeader = styled.header`
    background-color: #a2c4c7;
  `

  const StyledFooter = styled.footer`
    background-color: #a2c4c7;
  `

  return (
    <div className="modal is-active animated bounceInUp">
      <StyledBack className="modal-background" />
      <div className="modal-card">
        <StyledHeader className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <Delete onClick={handleCloseModal} />
        </StyledHeader>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <StyledFooter className="modal-card-foot">
          <Button white onClick={handleCloseModal} className="animated zoomInUp">
            Back
          </Button>
        </StyledFooter>
      </div>
    </div>
  )
}

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Modal
