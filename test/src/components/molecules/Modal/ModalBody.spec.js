import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ModalBody from '../../../../../src/components/molecules/Modal/ModalBody'

const description =
  'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字'

const team_data = {
  number: 3,
  roll: '設計・開発主担当',
  work:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ'
}

describe('Modal ModalBody Molecules', () => {
  it('should render ModalBody', () => {
    const wrapper = Enzyme.shallow(<ModalBody
      title="File Transfer Application"
      imageUrl="https://bulma.io/images/placeholders/1280x960.png"
      description={description}
      teamData={team_data}
      />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
