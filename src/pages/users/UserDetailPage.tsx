import { useParams } from 'react-router-dom';

export const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>User Detail</h1>
      <p>Displaying details for user ID: {id}</p>
    </div>
  );
};