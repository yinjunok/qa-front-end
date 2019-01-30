import * as React from 'react';
import { RenderOuter } from "../../components";
import * as css from './sty.less';

interface IPanelProps {
  pos: {
    left: number;
    top: number;
  }
}

class Panel extends React.Component<IPanelProps, {}> {
  render() {
    const { pos } = this.props;

    return (
      <RenderOuter>
        <div className={css.container} style={{ top: pos.top, left: pos.left }}>
          <span className={css.arrow}></span>
          <div className={css.panelHeader}></div>
          <div className={css.panelList}></div>
          <div className={css.panelFooter}></div>
        </div>
      </RenderOuter>
    );
  }
}

export default Panel;
