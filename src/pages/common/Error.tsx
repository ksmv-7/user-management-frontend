import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color:rgb(111, 56, 63);
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <Title>Oops! Something went wrong.</Title>
      <Message>
        We're working on it. Please try again later. If the issue persists, feel free to contact support.
      </Message>
      <BackButton to="/">Go Back to Home</BackButton>
    </ErrorPageContainer>
  );
};

export default ErrorPage;