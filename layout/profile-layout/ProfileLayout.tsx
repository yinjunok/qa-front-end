import * as React from 'react';
import { TopNav, ProfileCard } from '../../containers';
import * as css from './styles.less';

class ProfileLayout extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className={css.main}>
          <ProfileCard />
        </div>
      </div>
    );
  }
}

export default ProfileLayout;