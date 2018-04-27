import React from 'react'
import { storiesOf } from '@storybook/react'

import Rain from './Rain'
import Arrow from './Arrow'
import Bubble from './Bubble'

storiesOf('Atoms.Animation', module).add('Rain', () => <Rain />)

storiesOf('Atoms.Animation', module).add('Arrow', () => <Arrow />)

storiesOf('Atoms.Animation', module).add('Bubble', () => <Bubble />)
