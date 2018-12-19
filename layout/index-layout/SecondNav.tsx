import * as React from 'react';
import { Logo, TabLink } from '../../components';
import { SearchBox } from '../../containers';
import * as css from './styles.less';

const links = [
  {
    href: '/',
    name: '推荐'
  }, {
    href: '/follow',
    name: '关注'
  }, {
    href: '/hot',
    name: '热点'
  }
];

class SecondNav extends React.Component {

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.flex}>
          <Logo />
          <div style={{ marginLeft: 30 }}>
            <TabLink links={links} />
          </div>
        </div>
        <SearchBox />
      </div>
    );
  }
}

export default SecondNav;
