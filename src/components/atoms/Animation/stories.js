import React from 'react'
import { storiesOf } from '@storybook/react'

import Rain from './Rain'
import Arrow from './Arrow'

storiesOf('Atoms.Animation', module).add('Rain', () => <Rain />)

storiesOf('Atoms.Animation', module).add('Arrow', () => <Arrow />)
