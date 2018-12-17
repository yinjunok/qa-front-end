import * as React from 'react';
import Link from 'next/link';
import NoSsr from '@material-ui/core/NoSsr';
import ForumIcon from '@material-ui/icons/Forum';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Logo, Avatar } from '../../components';
import { SearchBox } from '../index'
import * as css from './styles.less';

class TopNav extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;

    return (
      <header className={css.header}>
        <div className={css.inner}>
          <div className={css.left}>
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
          <div className={css.right}>
            <NoSsr>
              <ForumIcon className={classes.icon} />
            </NoSsr>
            <Avatar />
          </div>
        </div>
      </header>
    )
  }
};

const styles = () => ({
  icon: {
    color: '#8590A6',
    cursor: 'pointer',
  },
});

export default withStyles(styles)(TopNav)