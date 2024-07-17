import { SearchForm } from '../components/PetSearch/SearchForm';
import { SearchResult } from '../components/PetSearch/SearchResult';
import { useState } from 'react';
import { usePets } from '../customHooks/usePets';

export const SearchPage = () => {
  const [formState, setFormState] = useState({
    location: '',
    animalType: '',
    animalBreed: '',
  });
  const { petsList, isPetsLoading, petsError } = usePets(formState);
  return (
    <div className="search flex flex-col gap-2 w-full mt-[56px]">
      <SearchForm setFormState={setFormState} />
      {isPetsLoading ? (
        <div className="loader self-center"></div>
      ) : petsError ? (
        <div className="error-pet-fetch text-2xl font-bold text-white p-4 text-center bg-red-600 bg-opacity-60">
          Error occurred: {petsError.message}
        </div>
      ) : (
        <SearchResult petsList={petsList} petError={petsError} />
      )}
    </div>
  );
};
