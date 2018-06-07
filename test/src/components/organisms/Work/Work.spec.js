import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Work from '../../../../../src/components/organisms/Work/Work'

describe('Work Work Molecules', () => {
  it('should render Work', () => {
    const wrapper = Enzyme.shallow(<Work />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
