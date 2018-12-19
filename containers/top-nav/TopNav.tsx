import * as React from 'react';
import Link from 'next/link';
import { MdForum } from "react-icons/md";

import { Logo, Avatar, Switch, Select } from '../../components';
import { debounce } from '../../utils';
import { SearchBox } from '../index'
import * as css from './styles.less';

const data = [
  {
    value: 1,
    label: '中文',
  },
  {
    value: 2,
    label: 'English',
  }
];

interface ITopNavProps {
  secondNav: React.ReactNode;
}

class TopNav extends React.Component<ITopNavProps, {}> {
  static defaultProps = {
    secondNav: null
  }

  state = {
    checked: true,
    selected: 1,
    showSecondNav: false, // 是否向上滚动
  }

  componentDidMount() {
    // 如果有第二导航
    if (this.props.secondNav !== null) {
      this.preScrollTop = document.documentElement.scrollTop;
      window.addEventListener('scroll', debounce(this.scrollHandler));
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
              <MdForum size={24} className={`${css.forumIcon} ${css.functionIcon}`} />
              <div className={css.functionIcon}>
                <Switch checked={this.state.checked} onChange={this.changeHandler} />
              </div>
              <div className={css.functionIcon}>
                <Select options={data} value={this.state.selected} onChange={(val) => { console.log(val); this.setState({selected: val}) }} />
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
    const curScrollTop = document.documentElement.scrollTop;

    // 当前高度比之前高, 那么是向下滚动, 展示第二导航
    if (curScrollTop > this.preScrollTop) {
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

  private changeHandler = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }
};

export default TopNav;