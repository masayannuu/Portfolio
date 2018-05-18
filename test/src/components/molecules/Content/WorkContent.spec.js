import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

import WorkContent from '../../../../../src/components/molecules/Content/WorkContent'

Enzyme.configure({ adapter: new Adapter() })

const tags = ['Ruby', 'Js', 'java', 'C#']
const info_tags = [{ name: 'Language', tags }, { name: 'SoftWare', tags }]

const description =
  'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字'

const team_data = {
  number: 3,
  roll: '設計・開発主担当',
  work:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ'
}

const content = {
  title: 'File Transfer Service',
  sub_title: 'ファイル転送サービス',
  image_url: 'https://bulma.io/images/placeholders/1280x960.png',
  description,
  team_data,
  info_tags
}

describe('Content WorkContent Molecules', () => {
  it('should render WorkContent', () => {
    const wrapper = Enzyme.shallow(<WorkContent content={content} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
