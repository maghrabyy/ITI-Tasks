import { useQuery } from '@tanstack/react-query';
import { fetchAnimal } from '../utils/APIs/fetchAnimal';

export const usePetDetails = (id) => {
  const petQuery = useQuery({
    queryKey: ['petDetails', id],
    queryFn: fetchAnimal,
  });
  return {
    petDetails: petQuery?.data?.pets[0],
    petError: petQuery.error,
    isPetLoading: petQuery.isLoading,
  };
};
