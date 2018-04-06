import React from 'react'
import { storiesOf } from '@storybook/react'
import InfoTagGroup from './InfoTagGroup'

const tags = ['Ruby', 'Js']
storiesOf('Molecules.Content', module).add('InfoTagGroup', () => (
  <InfoTagGroup name="Language" tags={tags} />
))
