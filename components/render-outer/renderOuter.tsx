import * as React from 'react';
import * as ReactDOM from 'react-dom';

class RenderOuter extends React.Component {  
  private outer: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.outer = document.createElement('div');
  }
  componentDidMount() {
    document.body.appendChild(this.outer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.outer);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.outer)
  }
}

export default RenderOuter;