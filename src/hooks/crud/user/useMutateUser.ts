import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser, updateUser } from '../../../api/users.service';
import { useAlert } from '../../alerts/useAlert';
import { UserUpdatePayload } from '../../../types/user/types';

export function useUpdateUser() {
  const { showAlertSuccess, showAlertError } = useAlert();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async ({ userId, body }: { userId: string; body: UserUpdatePayload }) => {
      return await updateUser(userId, body);
    },
    onSuccess: (userId) => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      showAlertSuccess();
    },
    onError: () => {
      showAlertError();
    },
  });
  return {
    updateUserMutation: mutate,
  }
}

export function useDeleteUser() {
  const { showAlertSuccess, showAlertError } = useAlert();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (userId: string) => {
      return await deleteUser(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      showAlertSuccess();
    },
    onError: () => {
      showAlertError();
    },
  });

  return {
    deleteUserMutation: mutate,
  }
}
