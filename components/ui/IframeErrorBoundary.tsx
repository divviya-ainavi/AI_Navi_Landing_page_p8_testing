'use client';

import React, { Component, type ReactNode } from 'react';
import { ScoreAppFallback } from '@/components/ui/ScoreAppFallback';

interface Props {
  children: ReactNode;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
}

export class IframeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    this.props.onRetry?.();
  };

  render() {
    if (this.state.hasError) {
      return <ScoreAppFallback onRetry={this.handleRetry} />;
    }
    return this.props.children;
  }
}
