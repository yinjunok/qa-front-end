import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isBrowser } from '../../utils';
import NoSsr from '../no-ssr/NoSsr';

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
    return (
      <NoSsr>
        {
          ReactDOM.createPortal(this.props.children, this.outer as HTMLDivElement)
        }
      </NoSsr>
    )
  }
}

export default RenderOuter;