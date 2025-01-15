import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDebounce } from '../../../hooks/common/useDebounce';
import { useListDebouncedUsers } from '../../../hooks/crud/user/useReadUser';
import { useNavigate } from 'react-router-dom';
import { useSelectedUser } from '../../../context/user/UserContext';
import { User } from '../../../types/user/types';

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  /* More "beautiful" styling */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  width: 300px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

const SearchResultItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f7f7f7;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearch = useDebounce({ value: searchTerm, delay: 200 });
  const { debouncedUsersData } = useListDebouncedUsers(debounceSearch);
    const { setSelectedUser } = useSelectedUser();
  const navigate = useNavigate();

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleResultClick = useCallback((user: User) => {
    navigate(`/users/${user.id}`);
    setSelectedUser(user)
  }, [navigate, setSelectedUser]);
  const userData = debouncedUsersData ?? [];

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Search users by email..."
        value={searchTerm}
        onChange={handleChange}
      />

      {searchTerm && userData.length > 0 && (
        <SearchResults>
          {userData.map((user) => (
            <SearchResultItem
              key={user.id}
              onClick={() => handleResultClick(user)}
            >
              {user.email}
            </SearchResultItem>
          ))}
        </SearchResults>
      )}
    </SearchWrapper>
  );
};
