import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import StyledSection from '../../../../../src/components/atoms/Section/StyledSection'

describe('Section StyledSection Atoms', () => {
  it('should render StyledSection', () => {
    const wrapper = Enzyme.shallow(<StyledSection>StyledSection</StyledSection>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
