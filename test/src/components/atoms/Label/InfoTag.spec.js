import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import { InfoTag } from '../../../../../src/components/atoms/Label/InfoTag'

Enzyme.configure({ adapter: new Adapter() })

describe('Label InfoTag Atoms', () => {
  it('should render InfoTag', () => {
    const wrapper = Enzyme.shallow(<InfoTag>InfoTag</InfoTag>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
