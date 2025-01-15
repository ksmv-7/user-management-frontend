import styled from 'styled-components';
import { UserCard } from './UserCard';
import { useListPaginatedUsers } from '../../../hooks/crud/user/useReadUser';
import { LoadMoreButton } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../common/SearchBar';

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

  const navigate = useNavigate();

  if (isPaginatedUsersLoading) {
    return <p>Loading users...</p>;
  }
  if (isPaginatedUsersError) {
    navigate('/error')
  }

  const users = paginatedUsersData?.pages.flatMap((group) => group.users) || [];

  return (
    <>
      <SearchBar />
      <Grid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
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