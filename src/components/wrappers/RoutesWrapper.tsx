import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const UserCreatePage = React.lazy(() => import('../../pages/users/UserCreatePage'))
const UserListPage = React.lazy(() => import('../../pages/users/UserListPage'));
const UserDetailPage = React.lazy(() => import('../../pages/users/UserDetailPage'));
const ErrorPage = React.lazy(() => import('../../pages/common/Error'));

export const RoutesWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/users/new" element={<UserCreatePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
