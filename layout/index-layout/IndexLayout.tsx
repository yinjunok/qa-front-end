import * as React from 'react';
import { TopNav } from '../../containers';
import SecondNav from './SecondNav';

class IndexLayout extends React.Component {
  render() {
    return (
      <div>
        <TopNav secondNav={<SecondNav />} />
      </div>
    )
  }
}

export default IndexLayout;