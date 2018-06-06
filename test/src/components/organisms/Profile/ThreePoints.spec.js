import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ThreePoints from '../../../../../src/components/Organisms/Profile/ThreePoints'

describe('ThreePoints ThreePoints Molecules', () => {
  it('should render ThreePoints', () => {
    const wrapper = Enzyme.shallow(<ThreePoints />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
