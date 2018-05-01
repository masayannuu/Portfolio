import React from 'react'
import { storiesOf } from '@storybook/react'

import Profile from './Profile'
import ThreePoints from './ThreePoints'

storiesOf('Organisms.Profile', module).add('Profile', () => <Profile />)
storiesOf('Organisms.ThreePoints', module).add('ThreePoints', () => <ThreePoints />)
