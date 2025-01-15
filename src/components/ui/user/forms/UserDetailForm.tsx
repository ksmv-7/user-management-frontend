import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../../../../schemas/user.schema';
import { useSelectedUser } from '../../../../context/user/UserContext';
import styled from 'styled-components';
import { useUpdateUser } from '../../../../hooks/crud/user/useMutateUser';
import { useReadUser } from '../../../../hooks/crud/user/useReadUser';
import { useAlert } from '../../../../hooks/alerts/useAlert';

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 500px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    outline: none;
  }
`;

const ErrorText = styled.p`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #007bff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export const UserDetailForm = () => {
  const { updateUserMutation } = useUpdateUser();
  const { selectedUser } = useSelectedUser();
  const { user } = useReadUser(selectedUser?.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const { showAlertError } = useAlert();
  
  useEffect(() => {
    const userData = selectedUser || user;
    if (userData) {
      reset({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
      });
    }
  }, [selectedUser, user, reset]);
  

  if (!selectedUser?.id && !user?.id) {
    return <p>No user selected.</p>;
  }
  
  const displayUser = selectedUser?.id ? selectedUser : user;
  
  const onSubmit = async (values: FormValues) => {
    if (!displayUser?.id) {
      showAlertError("Valid user ID is required for submission");
      return;
    }
    updateUserMutation({ userId: displayUser.id, body: values });
  };  
  return (
    <FormWrapper>
      <Title>Edit User: {displayUser?.name}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Name</Label>
          <Input {...register('name')} placeholder="Enter full name" />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </FormGroup>
 
        <FormGroup>
          <Label>Email</Label>
          <Input {...register('email')} placeholder="Enter email address" />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label>Phone</Label>
          <Input {...register('phone')} placeholder="Enter phone number" />
          {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
        </FormGroup>

        <SubmitButton type="submit">Update User</SubmitButton>
      </Form>
    </FormWrapper>
  );
};