import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Sns from '../../../../../src/components/Organisms/Sns/Sns'

describe('Sns Sns Molecules', () => {
  it('should render Sns', () => {
    const wrapper = Enzyme.shallow(<Sns />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
