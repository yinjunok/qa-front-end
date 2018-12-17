import * as React from 'react';
import Link from 'next/link';
import NoSsr from '@material-ui/core/NoSsr';
import ForumIcon from '@material-ui/icons/Forum';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Logo, Avatar, Switch, Select } from '../../components';
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

class TopNav extends React.Component<WithStyles<typeof styles>> {
  state = {
    checked: true,
  }

  render() {
    const { classes } = this.props;

    return (
      <header className={css.header}>
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
            <NoSsr>
              <ForumIcon className={`${classes.icon} ${css.functionIcon}`} />
            </NoSsr>
            <div className={css.functionIcon}>
              <Switch checked={this.state.checked} onChange={this.changeHandler} />
            </div>
            <div className={css.functionIcon}>
              <Select options={data} defaultValue={1} />
            </div>
            <Avatar />
          </div>
        </div>
      </header>
    )
  }

  private changeHandler = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }
};

const styles = () => ({
  icon: {
    color: '#8590A6',
    cursor: 'pointer',
  },
});

export default withStyles(styles)(TopNav)