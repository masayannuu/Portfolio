import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import InfoTagGroup from '../../../../../src/components/molecules/Content/InfoTagGroup'

Enzyme.configure({ adapter: new Adapter() })

const tags = ['Ruby', 'Js', 'java', 'C#']
describe('Content InfoTagGroup Molecules', () => {
  it('should render InfoTagGroup', () => {
    const wrapper = Enzyme.shallow(<InfoTagGroup name="Language" tags={tags} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
