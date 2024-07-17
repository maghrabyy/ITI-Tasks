import { useQuery } from '@tanstack/react-query';
import { fetchPetsList } from '../utils/APIs/fetchPets';

export const usePets = (animal) => {
  const petsQuery = useQuery(['pets', animal], fetchPetsList);
  const petsList = petsQuery?.data?.pets ?? [];
  const petsError = petsQuery.error;
  const isPetsLoading = petsQuery.isLoading;
  return { petsList, petsError, isPetsLoading };
};
