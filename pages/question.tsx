import * as React from 'react';
import Head from 'next/head';
import { QuestionLayout } from '../layout';

class Question extends React.Component {
  render() {
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/braft-editor/braft-editor.css" /> 
        </Head>
        <QuestionLayout />
      </>
    );
  }
}

export default Question;
