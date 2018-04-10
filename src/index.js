import React from 'react'
import ReactDOM from 'react-dom'
import fontawesome from '@fortawesome/fontawesome'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Add fontawesome
fontawesome.library.add(faAngleRight)

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
