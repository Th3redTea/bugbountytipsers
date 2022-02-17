import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Libre+Baskerville&family=Roboto+Slab&family=Roboto:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument