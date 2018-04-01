import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import { Title } from '../../../../../src/components/atoms/Heading/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading Title Atoms', () => {
  it('should render Title', () => {
    const wrapper = Enzyme.shallow(<Title>title</Title>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
