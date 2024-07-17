import { useQuery } from '@tanstack/react-query';
import { fetchAnimal } from '../utils/APIs/fetchAnimal';

export const usePetDetails = (id) => {
  const petQuery = useQuery(['petDetails', id], fetchAnimal);
  const petDetails = petQuery?.data?.pets[0];
  const isPetLoading = petQuery.isLoading;
  const petError = petQuery.error;
  return { petDetails, petError, isPetLoading };
};
