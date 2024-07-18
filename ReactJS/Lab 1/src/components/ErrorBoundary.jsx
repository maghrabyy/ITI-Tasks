import { Component } from 'react';
import { Link } from 'react-router-dom';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error occurred: ', error, info);
  }
  render() {
    return this.state.hasError ? (
      <div className="error-boundary-msg text-2xl font-bold text-white p-4 text-center bg-red-600 bg-opacity-60">
        Error occurred, go to the{' '}
        <Link className=" underline text-blue-500" to="/">
          Home Page
        </Link>{' '}
        and try again later.
      </div>
    ) : (
      this.props.children
    );
  }
}
