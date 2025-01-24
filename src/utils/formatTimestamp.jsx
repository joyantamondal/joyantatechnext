import { format } from 'date-fns';

export const formatTimestamp = (timestamp) => {
  return format(new Date(timestamp), 'MMM dd, yyyy HH:mm');
};
