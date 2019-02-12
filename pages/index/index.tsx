import * as React from 'react';
import { NextContext } from 'next'
import { Answer } from '../../containers';
import { IndexLayout } from '../../layout';

export default class Index extends React.Component {
  static async getInitialProps({ req }: NextContext) {
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    // return { userAgent }
    if (req) {
      console.log(req.headers['cookie']);
    }
    
    return {};
  }

  render() {
    return (
      <IndexLayout>
        <Answer />
      </IndexLayout>
    )
  }
}
