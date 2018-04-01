import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import SubTitle from '../../../../../src/components/atoms/Heading/SubTitle'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading SubTitle Atoms', () => {
  it('should render SubTitle', () => {
    const wrapper = Enzyme.shallow(<SubTitle>subtitle</SubTitle>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
