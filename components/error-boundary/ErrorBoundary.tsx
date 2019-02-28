import * as React from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

interface IErrorBoundaryProps {
  errorCom: React.ReactNode;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  static defaultProps = {
    errorCom: null,
  }

  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorCom;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
