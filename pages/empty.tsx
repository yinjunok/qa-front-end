import * as React from 'react';
import { Trigger } from '../components';
import { TopicHoverCard } from '../containers';

class Empty extends React.Component<any, {}> {
  render() {
    return (
      <>
        <Trigger popup={<TopicHoverCard />}>
          {
            (ref) => <span ref={ref}>user</span>
          }
        </Trigger>
      </>
    );
  }
}

export default Empty;
