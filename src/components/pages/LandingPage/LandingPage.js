import React from 'react'

import LandingPageTemplate from '../../templates/LandingPage/LandingPage'
import FirebaseClient from '../../../../lib/Domain/FirebaseClient'

class LandingPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contents: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    const client = new FirebaseClient()
    const contents = await client.find('work_contents')
    this.setState({ contents })
  }

  render () {
    console.log(this.state.contents)
    return <LandingPageTemplate contents={this.state.contents} />
  }
}

export default LandingPage
