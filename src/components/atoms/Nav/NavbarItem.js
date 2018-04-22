import React from 'react'
import styled from 'styled-components'

const NavAnker = styled.a`
  color: #ffffff;
  font-feature-settings: 'palt';
  letter-spacing: 0.2em;
  font-size: 81.25%;
  &:hover {
    color: #f0f0f0;
    text-decoration: underline;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 1s ease;
    text-shadow: #057D9F 0px 0px 20px;
  }
`

const NavbarItem = ({ children, href }) => (
  <div className="navbar-item">
    <p className="control">
      <NavAnker href={href}>{children}</NavAnker>
    </p>
  </div>
)

export default NavbarItem
