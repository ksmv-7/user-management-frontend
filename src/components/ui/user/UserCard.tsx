import styled from 'styled-components';
import { FiPhone, FiMail } from 'react-icons/fi';
import { User } from '../../../types/user/types';
import { Link } from 'react-router-dom';
import { DeleteButton } from '../common/Button';
import { useDeleteUser } from '../../../hooks/crud/user/useMutateUser';

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #007bff;
`;

const Detail = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  svg {
    margin-right: 0.5rem;
    color: #007bff;
  }
`;

export const UserCard = ({ user }: { user: User; }) => {
  
  const { mutate: deleteUserMutate } = useDeleteUser();

  const handleDelete = () => {
    deleteUserMutate(user.id);
  };

  return (
    <Card>
      <Header>
        <Link to={`/users/${user.id}`}>
          <Name>{user.name}</Name>
        </Link>
        <DeleteButton onClick={handleDelete} />
      </Header>
      <Detail>
        <FiMail /> {user.email}
      </Detail>
      <Detail>
        <FiPhone /> {user.phone}
      </Detail>
    </Card>
  );
};
