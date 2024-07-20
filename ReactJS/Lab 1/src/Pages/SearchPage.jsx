import { SearchForm } from '../components/PetSearch/SearchForm';
import { SearchResult } from '../components/PetSearch/SearchResult';
import { useState } from 'react';
import { AdoptedPet } from '../components/PetSearch/AdoptedPet';

export const SearchPage = () => {
  const [formState, setFormState] = useState({
    location: '',
    animalType: '',
    animalBreed: '',
  });
  return (
    <div className="search-page flex flex-col gap-2 w-full mt-[62px] mb-2">
      <div className="search-adopted grid grid-cols-3 gap-2">
        <SearchForm setFormState={setFormState} />
        <AdoptedPet />
      </div>
      <SearchResult formState={formState} />
    </div>
  );
};
