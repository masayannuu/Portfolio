import React, { Component } from 'react'
import Typekit from 'react-typekit'
import path from 'path'

export default {
  plugins: [
    [
      'react-static-plugin-favicons',
      {
        inputFile: path.resolve(__dirname, 'public', 'icon.svg'),
      },
      'react-static-plugin-styled-components',
    ],
  ],
  getSiteData: async () => ({
    title: 'Masaya Morimoto',
  }),
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children,
      } = this.props
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Typekit kitId="lyf0hzv" />
            <link
              rel="stylesheet"
              crossOrigin="true"
              href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
            />
            <title>MASAYA MORIMOTO | PORTFOLIO</title>
          </Head>
          <Body className="has-navbar-fixed-top">{children}</Body>
        </Html>
      )
    }
  },
}
