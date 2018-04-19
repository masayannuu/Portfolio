import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactbulma'

const StyledFooter = styled.footer`
  background-color: #a2c4c7;
`

const StyledDiv = styled.div`
  font-size: 0.8rem;
  color: #ffffff;
  font-feature-settings: 'palt';
  letter-spacing: 0.2em;
`

const Footer = () => (
  <StyledFooter className="footer">
    <Container>
      <StyledDiv className="content has-text-centered">
        <p>Thank you for reading!</p>
        <p> &copy; {new Date().getFullYear()} Masaya Morimoto</p>
      </StyledDiv>
    </Container>
  </StyledFooter>
)

export default Footer
