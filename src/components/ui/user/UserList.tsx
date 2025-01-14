import styled from 'styled-components';
import { UserCard } from './UserCard';
import { useListPaginatedUsers } from '../../../hooks/crud/useReadUser';
import { MemoizedLoadMoreButton } from '../common/Button';

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
    isFetching,
    isFetchingNextPage,
    isListUsersLoading,
    isListUsersError,
  } = useListPaginatedUsers();


  if (isListUsersLoading) {
    return <p>Loading users...</p>;
  }
  if (isListUsersError) {
    return <p>Fetching failed</p>;
  }

  const users = paginatedUsersData?.pages.flatMap((group) => group.users) || [];

  return (
    <>
      <Grid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Grid>

      <div>
        <MemoizedLoadMoreButton
          onClick={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      </div>

      {isFetching && !isFetchingNextPage && <div>Fetching...</div>}
    </>
  );
};