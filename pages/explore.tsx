import * as React from 'react';
import Link from 'next/link';
import { TopNav, Answer } from '../containers';
import { Card } from '../components';
import * as css from '../styles/explore-page.less';

const { CardHeader, CardSection } = Card;

class MonthlyHot extends React.Component {
  state = {
    activeTab: 0,
  }

  render() {
    const { activeTab } = this.state;

    return (
      <>
        <TopNav />
        <div className={css.main}>
          <div className={css.left}>
            <ul className={css.tab}>
              <li className={css.link} onClick={() => this.toggleTab(0)}>
                <span className={`${activeTab === 0 ? css.active : ''}`}>今日最热</span>
              </li>
              <li className={css.link} onClick={() => this.toggleTab(1)}>
                <span className={`${activeTab === 1 ? css.active : ''}`}>本月最热</span>
              </li>
            </ul>
            <Answer />
          </div>
          <div className={css.right}>
            <Card>
              <CardHeader>
                <span>热门收藏</span>
                <button className={css.replace}>换一换</button>
              </CardHeader>
              <CardSection className={css.collItem}>
                <Link href='/'>
                  <a>也许是有用的</a>
                </Link>
                <p className={css.collMeta}>
                  <span>100人关注</span>
                  <span>•</span>
                  <span>277 条内容</span>
                </p>
              </CardSection>
              <CardSection className={css.collItem}>
                <Link href='/'>
                  <a>也许是有用的</a>
                </Link>
                <p className={css.collMeta}>
                  <span>100人关注</span>
                  <span>•</span>
                  <span>277 条内容</span>
                </p>
              </CardSection>
            </Card>
          </div>
        </div>
      </>
    )
  }

  private toggleTab = (active: number) => {
    this.setState({
      activeTab: active,
    });
  }
}

export default MonthlyHot;
