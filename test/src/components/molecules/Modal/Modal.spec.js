import React from 'react'
import Enzyme from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Modal from '../../../../../src/components/molecules/Modal/Modal'

const description =
  'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字'

describe('Modal Modal Molecules', () => {
  it('should render Modal', () => {
    const modal = (
      <Modal
        handleCloseModal={() => console.log('handle close')}
        showModal
        title="File Transfer Application"
      >
        <p>{description}</p>
      </Modal>
    )
    const wrapper = Enzyme.shallow(modal)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
