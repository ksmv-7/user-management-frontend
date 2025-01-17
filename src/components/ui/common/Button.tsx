import styled  from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
}

type LoadMoreButtonProps = ButtonProps & {
  isFetchingNextPage: boolean,
  hasNextPage: boolean,
}
export const LoadMoreButton = ({ onClick, isFetchingNextPage, hasNextPage }: LoadMoreButtonProps) =>
  <button onClick={onClick} disabled={!hasNextPage || isFetchingNextPage}>
    {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more users'}
  </button>

const DeleteButtonStyle = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #d9363e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #a8282e;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #999;
    border: 1px solid #ccc;
    cursor: not-allowed;
  }
`;

export const DeleteButton = ({ onClick }: ButtonProps) => {
  return (
    <DeleteButtonStyle 
      onClick={onClick} 
    >
      Delete
    </DeleteButtonStyle>
  );
};

const AddUserButtonStyle = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AddUserButton = () => {
  const navigate = useNavigate();

  const handleAddUser = useCallback(() => {
    navigate('/users/new');
  }, [navigate]);

  return <AddUserButtonStyle onClick={handleAddUser}>Add User</AddUserButtonStyle>;
};
