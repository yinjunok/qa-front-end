import * as React from 'react';
import { MdNotifications } from "react-icons/md";
import Panel from './Panel';

import * as css from './sty.less';

class Notifications extends React.Component {

  private iconWrapperRef = React.createRef<HTMLDivElement>();

  state = {
    showPanel: true, // 是否打开消息面板
    pos: {           // 消息面板位置
      left: 0,
      top: 20,
    }
  }



  render() {
    const { showPanel, pos } = this.state;
    return (
      <>
        <div className={css.iconWrapper} ref={this.iconWrapperRef}>
          <MdNotifications
            size={26}
            className={`${css.forumIcon}`}
          />
          <span className={css.notificationCount}>1</span>
        </div>
        {
          showPanel && <Panel pos={pos} />
        }
        
      </>
    );
  }
}

export default Notifications;
