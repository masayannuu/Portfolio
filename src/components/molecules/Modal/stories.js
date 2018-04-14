import React from 'react'
import { storiesOf } from '@storybook/react'

import CardModal from './CardModal'
import Modal from './Modal'
import ModalBody from './ModalBody'

const description =
  'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字'

const team_data = {
  number: 3,
  roll: '設計・開発主担当',
  work:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ'
}

storiesOf('Molecules.CardModal', module).add('CardModal', () => (
  <CardModal
    title="File Transfer Application"
    imageUrl="https://bulma.io/images/placeholders/1280x960.png"
    description={description}
    teamData={team_data}
  />
))

storiesOf('Molecules.ModalBody', module).add('ModalBody', () => (
  <ModalBody
    title="File Transfer Application"
    imageUrl="https://bulma.io/images/placeholders/1280x960.png"
    description={description}
    teamData={team_data}
  />
))

storiesOf('Molecules.Modal', module).add('Modal', () => (
  <Modal
    handleCloseModal={() => console.log('handle close')}
    showModal
    title="File Transfer Application"
  >
    <p>{description}</p>
  </Modal>
))
