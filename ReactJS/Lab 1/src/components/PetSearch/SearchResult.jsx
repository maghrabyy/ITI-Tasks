import { PetList } from '../PetList';
import { Pet } from '../Pet';
import { useSearchFormContext } from '../../Context/SearchFormContext';
import { useFetchPetsQuery } from '../../APIs/petAPI';

export const SearchResult = () => {
  const { formState } = useSearchFormContext();
  const {
    data: petsList,
    isFetching: isPetsLoading,
    error: petsError,
  } = useFetchPetsQuery(formState);
  if (isPetsLoading) return <div className="loader self-center"></div>;
  if (petsError)
    return (
      <div className="error-pet-fetch text-2xl font-bold text-white p-4 text-center bg-red-600 bg-opacity-60">
        Error occurred: {petsError.error}
      </div>
    );
  return petsList.length === 0 ? (
    <div className="empty-pets-list text-2xl font-bold text-white p-4 text-center bg-black bg-opacity-60">
      No pets found.
    </div>
  ) : (
    <PetList>
      {petsList.map((pet) => {
        return (
          <Pet
            key={pet.id}
            id={pet.id}
            petImg={pet.images[0]}
            name={pet.name}
            type={pet.animal}
            breed={pet.breed}
            desc={pet.description}
            location={`${pet.city}, ${pet.state}`}
          />
        );
      })}
    </PetList>
  );
};
