import styled from 'styled-components';
import { UserCard } from './UserCard';
import { useListPaginatedUsers } from '../../../hooks/crud/user/useReadUser';
import { LoadMoreButton } from '../common/Button';
import { SearchBar } from '../common/SearchBar';
import { useSelectedUser } from '../../../context/user/UserContext';
import { useNavigate } from 'react-router-dom';
import { AddUserButton } from '../common/Button';
import { User } from '../../../types/user/types';
import { useCallback } from 'react';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export const UserList = () => {
  const {
    paginatedUsersData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPaginatedUsersLoading,
    isPaginatedUsersError,
  } = useListPaginatedUsers();

  const { setSelectedUser } = useSelectedUser();
  const navigate = useNavigate();
  
  const handleClickUser = useCallback((user: User) => {
    setSelectedUser(user);
  }, [setSelectedUser]);

  if (isPaginatedUsersLoading) {
    return <p>Loading users...</p>;
  }
  if (isPaginatedUsersError) {
    navigate('/error');
  }


  const users = paginatedUsersData?.pages.flatMap((group) => group.users) || [];

  return (
    <>
      <AddUserButton />
      <SearchBar />
      <Grid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={handleClickUser} />
        ))}
      </Grid>
      <div>
        <LoadMoreButton
          onClick={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </>
  );
};
