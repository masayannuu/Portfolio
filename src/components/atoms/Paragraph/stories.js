import React from 'react'
import { storiesOf } from '@storybook/react'
import ParagraphTitle from './ParagraphTitle'
import Paragraph from './Paragraph'

storiesOf('Atoms.Paragraph', module).add('ParagraphTite', () => (
  <ParagraphTitle>paragraph</ParagraphTitle>
))

storiesOf('Atoms.Paragraph', module).add('Paragraph', () => <Paragraph text="hoge<br>aaa" />)
