import * as React from 'react';
import Link from 'next/link';
import { Logo } from '../../components';
import { SearchBox } from '../index'
import * as css from './styles.less';

class TopNav extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.inner}>
          <Logo />
          <nav className={css.nav}>
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
          <SearchBox />
        </div>
      </header>
    )
  }
};

export default TopNav;