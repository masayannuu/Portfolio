import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import LandingPage from '../../../../../src/components/pages/LandingPage/LandingPage'

describe('LandingPage LandingPage Molecules', () => {
  it('should render LandingPage', () => {
    const wrapper = Enzyme.shallow(<LandingPage />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
