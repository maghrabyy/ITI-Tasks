import { useState } from 'react';
import { useBreedsList } from '../../customHooks/useBreedsList';
import { useSearchFormContext } from '../../Context/SearchFormContext';

const animalTypes = ['dog', 'cat', 'bird', 'reptile', 'rabbit'];

export const SearchForm = () => {
  const [animalType, setAnimalType] = useState('');
  const { breedList, isBreedsLoading, breedsError } = useBreedsList(animalType);
  const { setFormState } = useSearchFormContext();
  const submitSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFormState({
      location: formData.get('animalLocation'),
      animalType: formData.get('animalType'),
      animalBreed: formData.get('animalBreed') ?? '',
    });
  };
  return (
    <form
      onSubmit={submitSearch}
      className="col-span-2 rounded-md border-slate-800 gap-2 inline-flex flex-col bg-black py-3 px-8 bg-opacity-60"
    >
      <label className="text-white font-bold text-2xl" htmlFor="animal-search">
        Search for pet to adopt.
      </label>
      <input
        name="animalLocation"
        placeholder="Pet Location"
        type="text"
        id="animal-search"
        className="rounded-md py-1 px-2"
      />
      <select
        value={animalType}
        onChange={(e) => setAnimalType(e.target.value)}
        name="animalType"
        id="animal-type"
        className="p-1 rounded-md"
      >
        <option value="">Select type</option>
        {animalTypes.map((animal) => {
          return (
            <option value={animal} key={animal}>
              {animal}
            </option>
          );
        })}
      </select>
      <select
        name="animalBreed"
        disabled={animalType && !breedsError ? false : true}
        id="animal-breed"
        className="p-1 rounded-md"
      >
        <option value="">
          {isBreedsLoading ? 'Loading...' : 'Select a breed'}
        </option>
        {breedList.map((breed) => {
          return (
            <option value={breed} key={breed}>
              {breed}
            </option>
          );
        })}
      </select>
      {breedsError && (
        <h1 className="text-red-600 font-bold">
          Error occurred: {breedsError.message}
        </h1>
      )}
      <button className="btn">Search</button>
    </form>
  );
};
