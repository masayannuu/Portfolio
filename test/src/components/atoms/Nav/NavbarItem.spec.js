import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import NavbarItem from '../../../../../src/components/atoms/Nav/NavbarItem'

describe('Nav NavbarItem Atoms', () => {
  it('should render NavbarItem', () => {
    const tag = (
      <NavbarItem href="hoge">
        <p>test</p>
      </NavbarItem>
    )
    const wrapper = Enzyme.shallow(tag)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
