import React from 'react'
import { storiesOf } from '@storybook/react'

import Work from './Work'

const tags = ['Ruby', 'Js', 'java', 'C#', 'hoge']
const info_tags = [{ name: 'Language', tags }, { name: 'Use Tech', tags }]
const description =
  'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字'
const team_data = {
  number: 3,
  roll: '設計・開発主担当',
  work:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ'
}
const details = {
  title: 'File Transfer Service',
  sub_title: 'ファイル転送サービス',
  image_url: 'https://bulma.io/images/placeholders/1280x960.png',
  description,
  team_data,
  info_tags
}

const tests = [details, details, details, details, details]

storiesOf('Organisms.Work', module).add('Work', () => <Work contents={tests} />)
