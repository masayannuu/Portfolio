import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import InfoTagGroup from '../../../../../src/components/molecules/Content/InfoTagGroup'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading InfoTagGroup Atoms', () => {
  it('should render InfoTagGroup', () => {
    const wrapper = Enzyme.shallow(<InfoTagGroup>InfoTagGroup</InfoTagGroup>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
