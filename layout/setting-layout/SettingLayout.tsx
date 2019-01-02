import * as React from 'react';
import Link from 'next/link';
import { MdPerson, MdNotifications, MdBlock } from 'react-icons/md';
import {
  withRouter,
  WithRouterProps,
  SingletonRouter,
} from 'next/router';
import { List, Card } from '../../components';
import { TopNav } from '../../containers';
import * as css from './styles.less';

class SettingLayout extends React.Component<WithRouterProps, {}> {
  render() {
    return (
      <div>
        <TopNav />
        <Card className={css.main}>
          <div className={css.nav}>
            <List className={`${css.link} ${this.isActive('/setting')}`}>
              <Link href='/setting'>
                <a>
                  <MdPerson className={css.linkIcon} />
                  账户与密码
                </a>
              </Link>
            </List>
            <List className={`${css.link} ${this.isActive('/setting/notification')}`}>
              <Link href='/setting/notification'>
                <a className={css.link}>
                  <MdNotifications className={css.linkIcon} />
                  消息
                </a>
              </Link>
            </List>
            <List className={`${css.link} ${this.isActive('/setting/filter')}`}>
              <Link href='/setting/filter'>
                <a className={css.link}>
                  <MdBlock className={css.linkIcon} />
                  屏蔽
                </a>
              </Link>
            </List>
          </div>
          <div className={css.content}>
            {this.props.children}
          </div>
        </Card>
      </div>
    );
  }

  private isActive(pathname: string): string {
    const { router } = this.props;
    if ((router as SingletonRouter).pathname === pathname) {
      return css.active;
    }

    return '';
  }
}

export default withRouter(SettingLayout);
