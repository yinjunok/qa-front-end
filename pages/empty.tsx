import * as React from 'react';
import { Trigger } from '../components';
import { HoverCard } from '../containers';

class Empty extends React.Component<any, {}> {
  render() {
    return (
      <>
        <Trigger popup={<HoverCard />}>
          {
            (ref) => <span ref={ref}>user</span>
          }
        </Trigger>
      </>
    );
  }
}

export default Empty;
