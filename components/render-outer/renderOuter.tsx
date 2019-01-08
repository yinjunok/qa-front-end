import * as React from 'react';
import * as ReactDOM from 'react-dom';

// https://github.com/zeit/next.js/issues/2177#issuecomment-357450558
const isBrowser = typeof window !== 'undefined';

class RenderOuter extends React.Component {  
  public outer: HTMLDivElement | undefined;
  constructor(props: any) {
    super(props);
    if (isBrowser) {
      this.outer = document.createElement('div');
    }
  }
  componentDidMount() {
    document.body.appendChild(this.outer as HTMLDivElement);
  }

  componentWillUnmount() {
    document.body.removeChild(this.outer as HTMLDivElement);
  }

  render() {
    if (isBrowser) {
      return ReactDOM.createPortal(this.props.children, this.outer as HTMLDivElement);
    }
    return null;
  }
}

export default RenderOuter;