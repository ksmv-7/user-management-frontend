import { useCallback } from 'react';

import type { ToastOptions } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { GENERAL_ERROR_MESSAGE } from '../../consts';


export const useAlert = () => {
  const showAlertSuccess = useCallback(
    (message = 'Success!', options?: ToastOptions) => {
      toast.dismiss();
      toast.success(message, options);
    },
    [],
  );

  const showAlertError = useCallback(
    (message = GENERAL_ERROR_MESSAGE, options?: ToastOptions) => {
      toast.dismiss();
      toast.error(message, options);
    },
    [],
  );

  const showAlertLoading = useCallback(
    (message = 'Updating...', options?: ToastOptions) => {
      toast.dismiss();
      toast.loading(message, options);
    },
    [],
  );

  return {
    showAlertSuccess,
    showAlertError,
    showAlertLoading,
  };
};