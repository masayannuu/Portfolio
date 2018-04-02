import React from 'react'
import { storiesOf } from '@storybook/react'

import { MainTitle, SubTitle } from './index'

storiesOf('Atoms.Heading', module)
  .add('MainTitle', () => <MainTitle>Main Title</MainTitle>)
  .add('SubTitle', () => <SubTitle>Sub Title</SubTitle>)
