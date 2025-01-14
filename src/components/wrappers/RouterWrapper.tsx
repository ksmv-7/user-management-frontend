import { Routes, Route } from 'react-router-dom';
import { UserListPage, UserDetailPage } from '../../pages/users';

export const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/users" element={<UserListPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
    </Routes>
  );
};