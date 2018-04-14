import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-16'
import { shallowToJson } from 'enzyme-to-json'

import ModalLink from '../../../../../src/components/atoms/Link/ModalLink'

Enzyme.configure({ adapter: new Adapter() })

describe('Link ModalLink Atoms', () => {
  it('should render ModalLink', () => {
    const wrapper = Enzyme.shallow(<ModalLink onClick={() => console.log('test')} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
