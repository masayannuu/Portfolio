import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.p`
  margin-right: 0.8rem;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
`

const ParagrahTitle = ({ className, children }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
)

export default ParagrahTitle
