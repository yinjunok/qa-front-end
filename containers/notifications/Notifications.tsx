import * as React from 'react';
import { MdNotifications } from "react-icons/md";
import Panel from './Panel';

import * as css from './sty.less';

class Notifications extends React.Component {

  private iconWrapperRef = React.createRef<HTMLDivElement>();

  state = {
    showPanel: false, // 是否打开消息面板
    pos: {           // 消息面板位置
      left: 0,
      top: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render() {
    const { showPanel, pos } = this.state;
    return (
      <>
        <div className={css.iconWrapper} ref={this.iconWrapperRef} onClick={this.togglePanel}>
          <MdNotifications
            size={26}
            className={css.forumIcon}
          />
          <span className={css.notificationCount}>1</span>
        </div>
        {
          showPanel && <Panel pos={pos} />
        }
      </>
    );
  }

  private togglePanel = () => {
    const { top, left } = this.calcPos();

    this.setState({
      showPanel: !this.state.showPanel,
      pos: {
        top,
        left,
      }
    });
  }

  private calcPos = () => {
    const { current } = this.iconWrapperRef;
    if (current !== null) {
      const rect = current.getBoundingClientRect();
      const top = rect.height + 22;
      const left = (rect.left - 181) + (rect.width / 2);
      return {
        top,
        left,
      }
    }

    return {
      top: 0,
      left: 0,
    }
  }

  private resizeHandler = () => {
    if (this.state.showPanel === false) return;

    const { top, left } = this.calcPos();
    this.setState({
      pos: {
        left,
        top,
      }
    });
  }
}

export default Notifications;
