import * as React from 'react';
import { TopNav } from '../../containers';

class IndexLayout extends React.Component {
  render() {
    return (
      <div>
        <TopNav secondNav={<p style={{ color: 'red' }}>第二导航</p>} />
      </div>
    )
  }
}

export default IndexLayout;