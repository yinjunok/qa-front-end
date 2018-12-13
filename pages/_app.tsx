import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { TopNav } from '../containers';
import '../styles/global.less';

export default class MyApp extends App {
  render () {
    const { Component } = this.props
    return (
      <Container>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" /> 
          <link rel="stylesheet" href="/static/typeface-roboto/index.css" /> 
        </Head>
        <TopNav />
        <Component />
      </Container>
    )
  }
}
