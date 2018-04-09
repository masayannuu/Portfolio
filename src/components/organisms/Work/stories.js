import React from 'react'
import { storiesOf } from '@storybook/react'

import Content from './Content'

const tags = ['Ruby', 'Js', 'java', 'C#']
const info_tags = [{ name: 'Language', tags }, { name: 'SoftWare', tags }]
storiesOf('Organisms.work', module).add('Content', () => (
  <Content
    heading="File Transfer Application"
    sub_heading="ファイル転送サービス"
    info_tags={info_tags}
  />
))
