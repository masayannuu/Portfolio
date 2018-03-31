require('babel-register')()

const jsdom = require('jsdom')

const { JSDOM } = jsdom

const exposedProperties = ['window', 'navigator', 'document']

global.document = new JSDOM('')
// NOTE: jsdomのAPIが変わり，symbolで埋め込まれていたので無理やり取得する方法にした
// モック用なのでこれでOK.運用を変える or 問題があるようなら旧APIを呼ぶか他の方法を試す
const symbol = Object.getOwnPropertySymbols(global.document)[0]
global.window = global.document[symbol]

Object.keys(document[symbol]).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document[symbol][property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
