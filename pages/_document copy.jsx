import { ServerStyleSheet } from 'styled-components'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const sheet = new ServerStyleSheet()

  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
