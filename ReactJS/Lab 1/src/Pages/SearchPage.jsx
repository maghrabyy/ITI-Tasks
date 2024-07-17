import { SearchForm } from '../components/PetSearch/SearchForm';
import { SearchResult } from '../components/PetSearch/SearchResult';
import { useState } from 'react';

export const SearchPage = () => {
  const [formState, setFormState] = useState({
    location: '',
    animalType: '',
    animalBreed: '',
  });
  return (
    <div className="search flex flex-col gap-2 w-full mt-[56px]">
      <SearchForm setFormState={setFormState} />
      <SearchResult formState={formState} />
    </div>
  );
};
