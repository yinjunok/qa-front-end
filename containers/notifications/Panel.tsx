import * as React from 'react';
import {
  MdList,
  MdPeople,
  MdFavorite,
  MdSettings
} from 'react-icons/md';
import Link from 'next/link';
import { RenderOuter } from "../../components";
import * as css from './sty.less';

interface IPanelProps {
  pos: {
    left: number;
    top: number;
  }
}

interface IPanelState {
  activePanel: number;
}

class Panel extends React.Component<IPanelProps, IPanelState> {
  state = {
    activePanel: 0,
  }

  render() {
    const { pos } = this.props;
    const { activePanel } = this.state;
    
    return (
      <RenderOuter>
        <div className={css.container} style={{ top: pos.top, left: pos.left }}>
          <span className={css.arrow} />
          <div className={css.panelHeader}>
            <button
              onClick={this.togglePanel(0)}
              className={`${css.tabButton} ${activePanel === 0 ? css.active : ''}`}
            >
              <MdList />
            </button>

            <button
              onClick={this.togglePanel(1)}
              className={`${css.tabButton} ${activePanel === 1 ? css.active : ''}`}
            >
              <MdPeople />
            </button>

            <button
              onClick={this.togglePanel(2)}
              className={`${css.tabButton} ${activePanel === 2 ? css.active : ''}`}
            >
              <MdFavorite />
            </button>
          </div>
          <div className={css.panelList}>
            
          </div>
          <div className={css.panelFooter}>
            <Link>
              <a href="/setting/notification" className={css.footerLink}>
                <MdSettings style={{ verticalAlign: 'sub', fontSize: 16, marginRight: 5 }} />
                设置
              </a>
            </Link>

            <Link>
              <a className={css.footerLink}>查看全部提醒</a>
            </Link>
          </div>
        </div>
      </RenderOuter>
    );
  }

  private togglePanel = (num: number) => () => {
    this.setState({
      activePanel: num,
    })
  }
}

export default Panel;
