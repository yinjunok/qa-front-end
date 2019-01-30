import * as React from 'react';
import Link from 'next/link';

import { SearchBox } from '../index'
import { debounce } from '../../utils';
import { Logo, Avatar } from '../../components';
import Notifications from '../notifications/Notifications';
import * as css from './styles.less';

interface ITopNavProps {
  secondNav: React.ReactNode;
  triggerHeight?: number;
}

class TopNav extends React.Component<ITopNavProps, {}> {
  static defaultProps = {
    secondNav: null,
    triggerHeight: 0,
  }

  state = {
    showSecondNav: false, // 是否向上滚动
  }

  componentDidMount() {
    // 如果有第二导航
    if (this.props.secondNav !== null) {
      this.preScrollTop = document.documentElement.scrollTop;
      window.addEventListener('scroll', debounce(this.scrollHandler, 100));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  render() {
    const { secondNav } = this.props;
    const { showSecondNav } = this.state;

    return (
      <header className={css.header}>
        <div className={`${css.scrollPanel} ${showSecondNav ? css.showSecondNav : ''}`}>
          <div className={css.inner}>
            <div className={css.innerItem}>
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
            <div className={css.innerItem}>
              <div style={{ marginRight: 20, paddingTop: 2 }}>
                <Notifications />
              </div>
              <Avatar />
            </div>
          </div>
          {
            secondNav !== null &&
            <div className={css.inner}>
              {secondNav}
            </div>
          }
        </div>
      </header>
    )
  }

  private preScrollTop: number = 0;
  private scrollHandler = () => {
    const { triggerHeight } = this.props;
    const curScrollTop = document.documentElement.scrollTop;

    // 当前高度比之前高, 那么是向下滚动, 
    // 并且当滚动的高度大于触发的高度
    // 展示第二导航
    if (
      curScrollTop > this.preScrollTop &&
      curScrollTop >= (triggerHeight as number)
    ) {
      this.setState({
        showSecondNav: true
      });
    } else {
      this.setState({
        showSecondNav: false
      });
    }
    this.preScrollTop = curScrollTop;
  }
};

export default TopNav;