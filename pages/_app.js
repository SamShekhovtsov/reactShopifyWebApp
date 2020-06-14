import App from 'next/app'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>PlaylistMaker web tool</title>
          <meta charSet="utf-8" />
        </Head>
          <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp