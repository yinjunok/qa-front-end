import * as React from 'react';
import { MdModeEdit, MdPersonAdd, MdModeComment } from 'react-icons/md';
import { Button } from '../../components';
import * as css from './styles.less';


class ActionBar extends React.Component {
  render() {
    return (
      <div className={css.actions}>
        <Button>
          关注问题
        </Button>
        <Button type='blue'>
          <MdModeEdit className={css.buttonIcon} />
          写回答
        </Button>
        <Button type='grey'>
          <MdPersonAdd className={css.buttonIcon} />
          邀请回答
        </Button>
        <div className={css.commentSwitch}>
          <MdModeComment className={css.buttonIcon} style={{ marginRight: 5 }} />
          99条评论
        </div>
      </div>
    );
  }
}

export default ActionBar;