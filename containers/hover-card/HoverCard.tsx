import * as React from 'react';
import { Avatar, Button } from '../../components';
import * as css from './sty.less';

class HoverCard extends React.Component {
  render() {
    return (
      <div className={css.hoverCardContainer}>
        <div className={css.hoverCard}>
          <div className={css.header}>
            <div className={css.avatar}>
              <Avatar size={72} radius={4} />
            </div>
            <div className={css.titleText}>
              <p className={css.title}>这是一个名字</p>
              <p className={css.subTitle}>这是一段说明, 应该长一点这是一段说明, 应该长一点这是一段说明, 应该长一点</p>
            </div>
          </div>
          <div className={css.achievement}>
            <div>
              <p className={css.itemName}>回答</p>
              <p className={css.itemNumber}>99</p>
            </div>
            <div>
              <p className={css.itemName}>关注者</p>
              <p className={css.itemNumber}>993</p>
            </div>
          </div>
          <div className={css.cardFooter}>
            <Button className={css.followBtn}>关注</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HoverCard;
