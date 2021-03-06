import React from 'react'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'

import LandingPage from './containers/LandingPage'

injectGlobal`
  body {
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  p {
    font-feature-settings: 'palt';
    letter-spacing: 0.05em;
  }

  .wf-loading {
    font-family: sans-serif;
   }

   .wf-inactive {
    font-family: sans-serif;
   }

   .vis-hidden {
     @media screen and (max-width: 1024px) {
      transform: translateZ(0)
     }
     @media screen and (min-width: 1025px) {
      visibility: hidden !important;
     }
  }
`

const App = () => <LandingPage />

export default hot(module)(App)
