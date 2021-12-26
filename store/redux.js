import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { initializeStore } from './store';

let reduxStore;

const getOrInitializeStore = initialState => {
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

/* global process */
/* eslint react/prop-types: "off" */
export default (PageComponent, { ssr = true } = {}) => {
  const WithRedux = ({ initialReduxState, ...props }) => {
    const store = getOrInitializeStore(initialReduxState);

    return (
      <Provider store={store}>
        <PageComponent {...props} />{' '}
      </Provider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      const reduxStore = getOrInitializeStore();
      context.reduxStore = reduxStore;

      const pageProps =
        typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(context)
          : {};

      return {
        ...pageProps,
        initialReduxState: reduxStore.getState(),
      };
    };
  }

  return WithRedux;
};
