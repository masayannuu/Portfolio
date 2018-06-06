import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { SubHeading } from '../../../../../src/components/atoms/Title/index'

describe('Heading SubHeading Atoms', () => {
  it('should render SubHeading', () => {
    const wrapper = Enzyme.shallow(<SubHeading>SubHeading</SubHeading>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
