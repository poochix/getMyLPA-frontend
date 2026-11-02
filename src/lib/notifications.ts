import { toast } from 'sonner';

export const notifications = {
  success(message: string) {
    toast.success(message);
  },

  error(message: string) {
    toast.error(message);
  },

  info(message: string) {
    toast.info(message);
  },

  warning(message: string) {
    toast.warning(message);
  },

  loading(message: string) {
    return toast.loading(message);
  },

  dismiss(id?: string | number) {
    toast.dismiss(id);
  },
};
