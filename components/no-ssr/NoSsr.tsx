import * as React from 'react';

class NoSsr extends React.Component {
  state = {
    canRender: false,
  }

  componentDidMount() {
    this.setState({
      canRender: true,
    });
  }

  render() {
    if (!this.state.canRender) return null;

    return this.props.children;
  }
}

export default NoSsr;
