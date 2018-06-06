import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Headline } from '../../../../../src/components/atoms/Title/index'

describe('Heading Headline Atoms', () => {
  it('should render Headline', () => {
    const wrapper = Enzyme.shallow(<Headline>Headline</Headline>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
