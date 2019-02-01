import * as React from 'react';
import { Trigger } from '../components';

class Empty extends React.Component {
  render() {
    return (
      <Trigger popup={<p>Hello World</p>}>
        <span style={{ position: 'fixed', top: 500 }}>123</span>
      </Trigger>
    );
  }
}

export default Empty;
