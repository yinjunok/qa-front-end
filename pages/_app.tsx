import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

import '../styles/global.less';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" /> 
          <link rel="stylesheet" href="/static/typeface-roboto/index.css" /> 
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
