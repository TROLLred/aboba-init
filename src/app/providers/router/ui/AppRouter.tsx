import React, { type FC, memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Page } from '../../ui/Page';
import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

import type { AppRoutesProps } from 'shared/types/router';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const { authOnly = true, element, ...rest } = route;
    return (
      <Route
        key={route.path}
        element={
          authOnly ? (
            <RequireAuth>
              <Page>{element}</Page>
            </RequireAuth>
          ) : (
            element
          )
        }
        {...rest}
      />
    );
  }, []);

  return (
    <Suspense fallback={<LoaderUI type='page' />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
