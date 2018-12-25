import * as React from 'react';
import { TopNav, ProfileCard, Answer } from '../../containers';
import { TabLink, Card, List } from '../../components';
import * as css from './styles.less';

const links = [
  {
    href: '/profile',
    name: '动态',
  }, {
    href: '/profile/answers',
    name: '回答',
  }, {
    href: '/profile/asks',
    name: '提问',
  }, {
    href: '/profile/posts',
    name: '文章',
  }, {
    href: '/profile/columns',
    name: '专栏',
  }, {
    href: '/profile/pins',
    name: '想法',
  }
]

class ProfileLayout extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className={css.main}>
          <ProfileCard />
          <div className={css.content}>
            <div className={css.left}>
              <TabLink links={links} />
              <Answer />
            </div>
            <div className={css.right}>
              <Card>
                <Card.CardHeader>个人成就</Card.CardHeader>
                <Card.CardSection>
                  关注者
                </Card.CardSection>
                <Card.CardSection>
                  获得的赞同
                </Card.CardSection>
                <Card.CardSection>
                  获得的感谢
                </Card.CardSection>
                <Card.CardSection>
                  获得的收藏
                </Card.CardSection>
              </Card>
              <Card>
                <Card.CardHeader>他的关注</Card.CardHeader>
                <List>
                  关注他的人
                </List>
                <List>
                  他关注的人
                </List>
                <List>
                  关注的话题
                </List>
                <List>
                  关注的专栏
                </List>
                <List>
                  关注的问题
                </List>
                <List>
                  关注的收藏夹
                </List>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileLayout;