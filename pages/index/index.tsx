import * as React from 'react';
import { Answer } from '../../containers';
import { IndexLayout } from '../../layout';

export default class Index extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Answer />
      </IndexLayout>
    )
  }
}
