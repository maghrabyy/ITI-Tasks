import { useParams } from 'react-router-dom';
import { useFetchPetDetailsQuery } from '../APIs/petAPI';
import { PetDetails } from '../components/PetDetails';

export const DetailPage = () => {
  const { id } = useParams();
  const {
    data: petDetails,
    isLoading: isPetLoading,
    error: petError,
  } = useFetchPetDetailsQuery(id);
  if (isPetLoading) return <div className="loader"></div>;
  if (petError)
    return (
      <div className="error-pet-fetch text-2xl font-bold text-white p-4 text-center bg-red-600 bg-opacity-60">
        Error occurred: {petError.error}
      </div>
    );
  return (
    <div className="pet-details-page mt-[62px] mb-2">
      <PetDetails pet={petDetails} />
    </div>
  );
};
