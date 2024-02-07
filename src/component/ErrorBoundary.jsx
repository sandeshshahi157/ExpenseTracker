// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ensure that logErrorToMyService is defined before using it
    if (typeof logErrorToMyService === 'function') {
      logErrorToMyService(error, errorInfo);
    } else {
      console.error('logErrorToMyService is not defined');
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI here
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
