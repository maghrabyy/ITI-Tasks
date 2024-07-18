import { useParams } from 'react-router-dom';
import { usePetDetails } from '../customHooks/usePetDetails';
import { PetDetails } from '../components/PetDetails';
import { ErrorBoundary } from '../components/ErrorBoundary';
export const DetailPage = () => {
  const { id } = useParams();
  const { petDetails, isPetLoading } = usePetDetails(id);
  if (isPetLoading) return <div className="loader"></div>;
  return (
    <ErrorBoundary>
      <PetDetails pet={petDetails} />
    </ErrorBoundary>
  );
};
