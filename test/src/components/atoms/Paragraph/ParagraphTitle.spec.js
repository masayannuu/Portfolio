import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import ParagraphTitle from '../../../../../src/components/atoms/Paragraph/ParagraphTitle'

Enzyme.configure({ adapter: new Adapter() })

describe('Paragraph ParagraphTitle Atoms', () => {
  it('should render ParagraphTitle', () => {
    const wrapper = Enzyme.shallow(<ParagraphTitle>ParagraphTitle</ParagraphTitle>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
