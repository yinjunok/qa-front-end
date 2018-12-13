import * as React from 'react';
import Link from 'next/link';
import * as css from './top-nav.less';

class TopNav extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.inner}>
          <nav>
            <Link href='/'>
              <a className={css.link}>首页</a>
            </Link>
            <Link href='/explore'>
              <a className={css.link}>发现</a>
            </Link>
            <Link href='/topic'>
              <a className={css.link}>话题</a>
            </Link>
          </nav>
        </div>
      </header>
    )
  }
};

export default TopNav;