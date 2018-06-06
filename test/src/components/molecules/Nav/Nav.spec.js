import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Nav from '../../../../../src/components/molecules/Nav/Nav'

describe('Nav Nav Molecules', () => {
  it('should render Nav', () => {
    const wrapper = Enzyme.shallow(<Nav />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
