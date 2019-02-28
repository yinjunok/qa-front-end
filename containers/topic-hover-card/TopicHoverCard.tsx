import * as React from 'react';
import { Avatar, Button } from '../../components';
import * as css from './sty.less';

class TopicHoverCard extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.header}>
          <Avatar
            size={70}
            radius={2}
            className={css.avatar}
          />
          <p className={css.topicName}>话题名字</p>
        </div>
        <div className={css.desc}>
          战争是一种集体、集团、组织、民族、派别、国家、政府互相使用暴力、
          攻击、杀戮等行为，使敌对双方为了达到一定的政治、经济、
          领土的完整性等目的而进行的武装战斗。由于触发战争的往往是政治家而非军人，
          因此战争亦被视为政治和外交的极端手段。广义来说，并不是只有人类才有战争。
          蚂蚁和黑猩猩等等生物都有战争行为。战争是政治集团之间、民族（部落）之间、
          国家（联盟）之间的矛盾最高的斗争表现形式，是解决纠纷的最暴力的手段，
          是在自然界解决问题的办法手段之一，通常被认为是原始社会才会使用的方法，
          由于其造成生命的消失，在现代人类社会不被认可。战争是极端的行为，
          战争的产生是由主导者为了自己或者集团的利益而发起的行为，
          这种获取利益的行为不惜以牺牲生命为代价获得。
        </div>
        <div className={css.topicData}>
          <div className={css.dataItem}>
            <p className={css.dataName}>问题</p>
            <p className={css.amount}>9999</p>
          </div>
          <div className={css.dataItem}>
            <p className={css.dataName}>关注者</p>
            <p className={css.amount}>9999</p>
          </div>
        </div>
        <div className={css.footer}>
          <Button className={css.btn}>关注</Button>
        </div>
      </div>
    );
  }
}

export default TopicHoverCard;
