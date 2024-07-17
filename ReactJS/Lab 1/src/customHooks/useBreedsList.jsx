import { useQuery } from '@tanstack/react-query';
import { fetchBreedList } from '../utils/APIs/fetchBreedList';

export const useBreedsList = (animalType) => {
  const breedsQuery = useQuery(['breeds', animalType], fetchBreedList);
  const breedList = breedsQuery?.data?.breeds ?? [];
  const isBreedsLoading = breedsQuery.isLoading;
  const breedsError = breedsQuery.error;
  return { breedList, breedsError, isBreedsLoading };
};
