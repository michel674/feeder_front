import React from 'react';

export const LoadingState = ({ children, loading, shimmer, errorCode }) => {
  if (loading) {
    return <div>{shimmer}</div>;
  }

  if (errorCode) {
    return <div>{errorCode}</div>;
  } else return children;
};
