import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import ReactStaticFavicons from '@kuroku/react-static-favicons'
import Typekit from 'react-typekit'
import path from 'path'

const reactStaticFavicons = new ReactStaticFavicons({
  // string: directory where the image files are written
  outputDir: path.join(__dirname, 'dist'),

  // string: the source imag
  inputFile: path.join(__dirname, 'public', 'favicon.png'),

  // object: the configuration passed directory to favicons
  configuration: {
    icons: {
      favicons: true
      // other favicons configuration
    }
  }
})

export default {
  preact: true,
  getSiteData: () => ({
    title: 'Masaya Morimoto'
  }),
  renderToHtml: async (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.faviconsElements = await reactStaticFavicons.render()
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  siteRoot: 'https://portfolio.masayannuu.com',
  // basePath: '/',
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
            <link
              rel="stylesheet"
              crossOrigin="true"
              href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
            />
            {renderMeta.styleTags}
            {renderMeta.faviconsElements}
            <title>Masaya Morimoto</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
