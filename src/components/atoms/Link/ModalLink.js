import React from 'react'
import styled from 'styled-components'
import { Icon, Field } from 'reactbulma'

const StyledField = styled(Field)`
  margin-right: 0.8rem;
  justify-content: flex-end !important;
  font-size: 1rem;
  position: relative;
  &:hover {
    cursor: pointer;
    color: #a2c4c7;
  }
`

const ModalLink = ({ onClick }) => (
  <StyledField grouped onClick={onClick}>
    <Icon>
      <i className="fa fa-angle-right" />
    </Icon>
    Click & More
  </StyledField>
)

export default ModalLink
