import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Footer from '../../../../../src/components/organisms/Footer/Footer'

describe('Footer Footer Molecules', () => {
  it('should render Footer', () => {
    const wrapper = Enzyme.shallow(<Footer />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
