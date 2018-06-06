import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import InfoTag from '../../../../../src/components/atoms/Label/InfoTag'

describe('Label InfoTag Atoms', () => {
  it('should render InfoTag', () => {
    const wrapper = Enzyme.shallow(<InfoTag>InfoTag</InfoTag>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
