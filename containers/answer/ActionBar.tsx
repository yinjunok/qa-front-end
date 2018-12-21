import * as React from 'react';
import {
  MdPlayArrow,
  MdModeComment,
  MdShare,
  MdStar,
  MdFavorite,
  MdMoreHoriz,
  MdExpandLess
} from 'react-icons/md'
import { Button } from '../../components';
import * as css from './styles.less';

class ActionBar extends React.Component {
  render() {
    return (
      <div className={css.actionBar}>
        <div className={css.left}>
          <div className={css.voteGroup}>
            <Button type='vote' className={css.vote}>
              <MdPlayArrow size={20} style={{ transform: 'rotate(-90deg)' }} />
              赞同
              <span className={css.agreeAmount}>999</span>
            </Button>
            <Button type='vote' className={css.vote}>
              <MdPlayArrow size={20} style={{ transform: 'rotate(90deg)' }} />
            </Button>
          </div>
    

          <div className={css.operating}>
            <MdModeComment size={18} className={css.operatingIcon} />
            99条评论
          </div>

          <div className={css.operating}>
            <MdShare size={18} className={css.operatingIcon} />
            分享
          </div>

          <div className={css.operating}>
            <MdStar size={18} className={css.operatingIcon} />
            收藏
          </div>

          <div className={css.operating}>
            <MdFavorite size={18} className={css.operatingIcon} />
            感谢
          </div>

          <div className={css.operating}>
            <MdMoreHoriz size={18} />
          </div>
        </div>

        <div className={css.operating}>
          收起
          <MdExpandLess size={18} style={{ marginLeft: 5 }} />
        </div>
      </div>
    );
  }
}

export default ActionBar;
