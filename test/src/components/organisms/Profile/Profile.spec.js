import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Profile from '../../../../../src/components/Organisms/Profile/Profile'

describe('Profile Profile Molecules', () => {
  it('should render Profile', () => {
    const wrapper = Enzyme.shallow(<Profile />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
