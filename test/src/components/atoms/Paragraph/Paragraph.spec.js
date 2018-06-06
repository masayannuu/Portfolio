import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Paragraph from '../../../../../src/components/atoms/Paragraph/Paragraph'

describe('Paragraph Paragraph Atoms', () => {
  it('should render Paragraph', () => {
    const wrapper = Enzyme.shallow(<Paragraph text="testです<br>改行区切り" />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
