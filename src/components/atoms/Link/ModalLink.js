import React from 'react'
import styled from 'styled-components'
import { Field } from 'reactbulma'

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
    - Click & More
  </StyledField>
)

export default ModalLink
