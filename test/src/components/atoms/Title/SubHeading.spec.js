import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import { SubHeading } from '../../../../../src/components/atoms/Title/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading SubHeading Atoms', () => {
  it('should render SubHeading', () => {
    const wrapper = Enzyme.shallow(<SubHeading>SubHeading</SubHeading>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
