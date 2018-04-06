import React from 'react'
import { storiesOf } from '@storybook/react'
import { Headline, SubHeading } from './index'

storiesOf('Atoms.Title', module)
  .add('Headline', () => <Headline>Headline</Headline>)
  .add('SubHeading', () => <SubHeading>SubHeading</SubHeading>)
