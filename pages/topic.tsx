import * as React from 'react';
import { MdFormatListBulleted } from 'react-icons/md';
import { Card, Tag, Avatar } from '../components';
import { TopNav, Answer } from '../containers';
import * as css from '../styles/topic-page.less';

class Topic extends React.Component {
  render() {
    return (
      <>
        <TopNav />
        <div className={css.main}>
          <Card className={css.content}>
            <div className={css.attention}>
              <p>
                <MdFormatListBulleted
                  style={{ fontSize: 16, marginRight: 5, verticalAlign: 'sub' }}
                />
                已关注的话题动态
              </p>
              <span className={css.attentionCount}>共关注21个话题</span>
            </div>

            <div className={css.topics}>
              <Tag className={css.topic}>Web 开发</Tag>
              <Tag className={`${css.topic} ${css.active}`}>TypeScript</Tag>
              <Tag className={css.topic}>Web 开发</Tag>
              <Tag className={`${css.topic} ${css.active}`}>TypeScript</Tag>
              <Tag className={css.topic}>Web 开发</Tag>
              <Tag className={`${css.topic} ${css.active}`}>TypeScript</Tag>
              <Tag className={css.topic}>Web 开发</Tag>
              <Tag className={`${css.topic} ${css.active}`}>TypeScript</Tag>
            </div>

            <div className={css.topicTitle}>
              <div className={css.topicAvatar}>
                <Avatar style={{ marginRight: 15 }} />
                Web开发
              </div>
              <div className={css.orderSwitch}>
                <button className={css.button}>根据热度排序</button>
                <span className={css.dividing} />
                <button className={`${css.button} ${css.active}`}>根据时间排序</button>
              </div>
            </div>

            <div>
              <Answer />
              <Answer />
              <Answer />
            </div>
          </Card>
          <div className={css.side}>
            <Card>
              <Card.CardHeader>热门话题</Card.CardHeader>
              <Card.CardSection>12345</Card.CardSection>
              <Card.CardSection>12345</Card.CardSection>
              <Card.CardSection>12345</Card.CardSection>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Topic;
