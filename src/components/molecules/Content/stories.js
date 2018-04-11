import React from 'react'
import { storiesOf } from '@storybook/react'
import InfoTagGroup from './InfoTagGroup'
import WorkContent from './WorkContent'

const tags = ['Ruby', 'Js', 'java', 'C#', 'hoge']
storiesOf('Molecules.Content', module).add('InfoTagGroup', () => (
  <InfoTagGroup name="Language" tags={tags} />
))

const info_tags = [{ name: 'Language', tags }, { name: 'SoftWare', tags }]
storiesOf('Molecules.Content', module).add('WorkContent', () => (
  <WorkContent
    heading="File Transfer Application"
    sub_heading="ファイル転送サービス"
    info_tags={info_tags}
  />
))
