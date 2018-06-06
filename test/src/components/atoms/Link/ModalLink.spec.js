import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ModalLink from '../../../../../src/components/atoms/Link/ModalLink'

describe('Link ModalLink Atoms', () => {
  it('should render ModalLink', () => {
    const wrapper = Enzyme.shallow(<ModalLink onClick={() => console.log('test')} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
