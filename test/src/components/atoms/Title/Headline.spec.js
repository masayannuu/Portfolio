import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import { Headline } from '../../../../../src/components/atoms/Title/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading Headline Atoms', () => {
  it('should render Headline', () => {
    const wrapper = Enzyme.shallow(<Headline>Headline</Headline>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
