import { useQuery } from '@tanstack/react-query';
import { fetchPetsList } from '../utils/APIs/fetchPets';

export const usePets = (animal) => {
  const petsQuery = useQuery(['pets', animal], fetchPetsList);
  return {
    petsList: petsQuery?.data?.pets ?? [],
    petsError: petsQuery.error,
    isPetsLoading: petsQuery.isLoading,
  };
};
