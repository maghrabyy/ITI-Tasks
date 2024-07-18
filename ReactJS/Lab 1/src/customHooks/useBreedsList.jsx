import { useQuery } from '@tanstack/react-query';
import { fetchBreedList } from '../APIs/fetchBreedList';

export const useBreedsList = (animalType) => {
  const breedsQuery = useQuery({
    queryKey: ['breeds', animalType],
    queryFn: fetchBreedList,
  });
  return {
    breedList: breedsQuery?.data?.breeds ?? [],
    breedsError: breedsQuery.error,
    isBreedsLoading: breedsQuery.isLoading,
  };
};
