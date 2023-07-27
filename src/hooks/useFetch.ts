import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

const defaultOptions = { refetchOnWindowFocus: false };

export const useFetch = (cashName: string, api: string, options?: {}) => {
  return useQuery(
    [cashName],
    async () => await axios.get(api),
    options !== undefined ? { ...options, ...defaultOptions} : defaultOptions,
  );
};
