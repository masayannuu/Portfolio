import React from 'react'
import styled from 'styled-components'

const NavAnker = styled.a`
  color: #ffffff;
  display: block;
  width: 100%;
  font-feature-settings: 'palt';
  letter-spacing: 0.2em;
  font-size: 0.95rem;
  &:hover {
    color: #f0f0f0;
    text-decoration: underline;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 1s ease;
    text-shadow: #057d9f 0px 0px 20px;
  }
`

const NavbarItem = ({ children, href }) => (
  <div className="navbar-item">
    <NavAnker href={href}>
      <span>{children}</span>
    </NavAnker>
  </div>
)

export default NavbarItem
