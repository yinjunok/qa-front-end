import * as React from 'react';
import {
  MdEdit,
  MdDescription,
  MdRecordVoiceOver,
  MdStar,
  MdPersonAdd,
  MdHelp,
} from "react-icons/md";
import { Card, List, TabLink } from '../../components';
import { TopNav } from '../../containers';
import SecondNav from './SecondNav';
import * as css from './styles.less';

const links = [
  {
    href: '/',
    name: '推荐'
  }, {
    href: '/index/follow',
    name: '关注'
  }, {
    href: '/index/hot',
    name: '热点'
  }
];

class IndexLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <TopNav secondNav={<SecondNav />} />
        <main className={css.main}>
        
          <div className={css.content}>
            <TabLink links={links} />
            {children}
          </div>


          <div className={css.sidebar}>
            <Card>
              <div className={css.iconPanel}>
                <a className={css.iconBlock}>
                  <MdDescription size={20} className={css.icon} />
                  <span>写回答</span>
                </a>
                <a className={css.iconBlock}>
                  <MdEdit size={20} className={css.icon} />
                  <span>写文章</span>
                </a>
                <a className={css.iconBlock}>
                  <MdRecordVoiceOver size={20} className={css.icon} />
                  <span>写想法</span>
                </a>
              </div>
            </Card>

            <Card>
              <List className={css.noticeItem}>
                <div className={css.noticeName}>
                  <MdStar size={16} className={css.icon} />
                  我的收藏
                </div>
                <span className={css.noticeAmount}>999</span>
              </List>
              <List className={css.noticeItem}>
                <div className={css.noticeName}>
                  <MdHelp size={16} className={css.icon} />
                  我关注的问题
                </div>
                <span className={css.noticeAmount}>999</span>
              </List>
              <List className={css.noticeItem}>
                <div className={css.noticeName}>
                  <MdPersonAdd size={16} className={css.icon} />
                  我的邀请
                </div>
                <span className={css.noticeAmount}>999</span>
              </List>
            </Card>
          </div>
        </main>
      </div>
    )
  }
}

export default IndexLayout;