import { useQuery } from '@tanstack/react-query';
import { fetchBreedList } from '../utils/APIs/fetchBreedList';

export const useBreedsList = (animalType) => {
  const breedsQuery = useQuery(['breeds', animalType], fetchBreedList);
  return {
    breedList: breedsQuery?.data?.breeds ?? [],
    breedsError: breedsQuery.error,
    isBreedsLoading: breedsQuery.isLoading,
  };
};
