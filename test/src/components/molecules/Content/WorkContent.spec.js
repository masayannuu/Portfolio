import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import WorkContent from '../../../../../src/components/molecules/Content/WorkContent'

Enzyme.configure({ adapter: new Adapter() })

const tags = ['Ruby', 'Js', 'java', 'C#']
const info_tags = [{ name: 'Language', tags }, { name: 'SoftWare', tags }]
describe('Content WorkContent Molecules', () => {
  it('should render WorkContent', () => {
    const wrapper = Enzyme.shallow(<WorkContent
      heading="File Transfer Application"
      sub_heading="ファイル転送サービス"
      info_tags={info_tags}
      />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
