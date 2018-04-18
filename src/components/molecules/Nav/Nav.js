import React from 'react'
import styled from 'styled-components'

import NavbarItem from '../../atoms/Nav/NavbarItem'

const NavMain = styled.nav`
  background-color: #a2c4c7;
`
const NavBar = styled.div`
  background-color: #a2c4c7;
`

const NavTitle = styled.a`
  font-size: 1rem;
  color: #ffffff;
  font-feature-settings: 'palt';
  letter-spacing: 0.2em;
  &:hover {
    color: #ffffff;
    text-decoration: underline;

`
class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.handleClickBurger = this.handleClickBurger.bind(this)
  }

  handleClickBurger () {
    this.setState(prevState => ({ isActive: !prevState.isActive }))
  }

  render () {
    return (
      <NavMain className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <p className="control">
              <NavTitle href="/">Masaya Morimoto</NavTitle>
            </p>
          </div>
          <div
            role="button"
            className={`navbar-burger ${this.state.isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.handleClickBurger}
            onKeyPress={this.handleClickBurger}
            tabIndex={0}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <NavBar className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <NavbarItem href="#portfolio">PROFILE</NavbarItem>
            <NavbarItem href="#work">WORK</NavbarItem>
            <NavbarItem href="#sns">SNS</NavbarItem>
            <NavbarItem href="#blog">BLOG</NavbarItem>
            <NavbarItem href="#content">CONTACT</NavbarItem>
          </div>
        </NavBar>
      </NavMain>
    )
  }
}

export default Nav
