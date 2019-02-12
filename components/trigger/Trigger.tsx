import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { isBrowser } from '../../utils';
import RenderOuter from '../render-outer/RenderOuter';
import * as css from './sty.less';

interface ITriggerProps {
  mouseEnterDelay?: number; // 毫秒
  mouseLeaveDelay?: number; // 毫秒
  popup: React.ReactNode;
  children: (ref: React.Ref<any>) => JSX.Element;
}

interface ITriggerState {
  showPop: boolean;
  pos: {
    top: number;
    left: number;
  }
}

class Trigger extends React.Component<ITriggerProps, ITriggerState> {
  static defaultProps = {
    mouseEnterDelay: 500,
    mouseLeaveDelay: 500,
  }

  state = {
    showPop: false,

    pos: {
      top: 0,
      left: 0,
    }
  }

  componentDidMount() {
    const child = this.getChild();
    (child as Element).addEventListener('mouseenter', this.mouseEnterHandler);
    (child as Element).addEventListener('mouseleave', this.mouseLeaveHandler);
  }

  componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }

  render() {
    const { popup, children } = this.props;
    if (!isBrowser) {
      return null;
    }

    const { pos, showPop } = this.state;

    return (
      <>
        {children(this.childRef)}
        {
          <RenderOuter>
            <div
              className={`${css.popup} ${showPop ? css.show : ''}`}
              style={pos}
              ref={this.popRef}
              onMouseEnter={this.clearLeaveTimer}
              onMouseLeave={this.mouseLeaveHandler}
            >
              {popup}
            </div>
          </RenderOuter>
        }
      </>
    );
  }

  private popRef = React.createRef<HTMLDivElement>();
  private childRef = React.createRef<Element>();

  private calcPos = () => {
    const child = this.getChild();
    const rect = (child as Element).getBoundingClientRect();
    const screenHeight = window.innerHeight;
    let top: number;

    const { current } = this.popRef;
    let popHeight: number = 0;
    if (current !== null) {
      current.style.display = 'block';
      const popRect = (current as HTMLDivElement).getBoundingClientRect();
      popHeight = popRect.height;
      current.style.display = ''
    }
    
    // 根据上下空间, 判断 pop 显示在上还是下面
    if ((screenHeight - rect.height - rect.top) > rect.top) {
      top = rect.height + rect.top;
    } else {
      top = rect.top - popHeight;
    }

    return {
      top,
      left: rect.left,
    }
  }

  private enterTimer: number | undefined = undefined;
  private mouseEnterHandler = () => {
    clearTimeout(this.enterTimer);

    this.enterTimer = setTimeout(() => {
      const { top, left } = this.calcPos();

      this.setState({
        showPop: true,
        pos: {
          top,
          left,
        }
      });
    }, this.props.mouseEnterDelay);
  }

  private leaveTimer: number | undefined = undefined;
  private mouseLeaveHandler = () => {
    this.leaveTimer = setTimeout(() => {
      this.setState({
        showPop: false,
      });
    }, this.props.mouseLeaveDelay);
  }

  private clearLeaveTimer = () => {
    setTimeout(() => {
      clearTimeout(this.leaveTimer);
    });
  }

  private getChild = () => {
    if (this.childRef.current !== null) {
      return findDOMNode(this.childRef.current);
    }
  }
}

export default Trigger;
