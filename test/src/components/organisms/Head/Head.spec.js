import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Head from '../../../../../src/components/organisms/Head/Head'

describe('Head Head Molecules', () => {
  it('should render Head', () => {
    const wrapper = Enzyme.shallow(<Head />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
