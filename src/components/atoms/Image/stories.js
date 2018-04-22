import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from 'reactbulma'

import MainImage from '../../../../public/main-back.gif'

storiesOf('Atoms.Image', module)
  .add('MainImage', () => <Image square="16by9" src={MainImage} />)
