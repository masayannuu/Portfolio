import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

import Typekit from 'react-typekit'

export default {
  preact: true,
  getSiteData: () => ({
    title: 'Masaya Morimoto'
  }),
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Typekit kitId="lyf0hzv" />
            {renderMeta.styleTags}
            <link
              rel="stylesheet"
              crossOrigin="true"
              href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
            />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
