import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../../api/users.service';
import { useAlert } from '../../alerts/useAlert';


export function useDeleteUser() {
  const { showAlertSuccess, showAlertError } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
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
}
