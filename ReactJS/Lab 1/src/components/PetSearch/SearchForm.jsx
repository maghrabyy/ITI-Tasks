import { useState, useEffect } from 'react';
import { useBreedsList } from '../../customHooks/useBreedsList';

const animalTypes = ['dog', 'cat', 'bird', 'reptile', 'rabbit'];

export const SearchForm = ({
  setIsResultLoading,
  setPetsList,
  setPetError,
}) => {
  const [location, setLocation] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [animalBreed, setAnimalBreed] = useState('');
  const { breedList, isLoading, error } = useBreedsList(animalType);
  const fetchPets = () => {
    setIsResultLoading(true);
    setPetError(null);
    fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animalType}&location=${location}&breed=${animalBreed}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setPetsList(data.pets);
      })
      .catch((e) => setPetError(e.message))
      .finally(() => {
        setIsResultLoading(false);
      });
  };
  useEffect(() => {
    fetchPets();
  }, []);
  useEffect(() => {
    setAnimalBreed('');
  }, [animalType]);
  const submitSearch = (e) => {
    e.preventDefault();
    fetchPets();
  };
  return (
    <form
      onSubmit={submitSearch}
      className="rounded-md border-slate-800 m-2 gap-2 inline-flex flex-col bg-black py-3 px-8 bg-opacity-60"
    >
      <label className="text-white font-bold text-2xl" htmlFor="animal-search">
        Search for pet to adopt.
      </label>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Pet Location"
        type="text"
        id="animal-search"
        className="rounded-md py-1 px-2"
      />
      <select
        value={animalType}
        onChange={(e) => setAnimalType(e.target.value)}
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
        disabled={animalType && !error ? false : true}
        value={animalBreed}
        onChange={(e) => setAnimalBreed(e.target.value)}
        id="animal-breed"
        className="p-1 rounded-md"
      >
        <option value="">{isLoading ? 'Loading...' : 'Select a breed'}</option>
        {breedList.map((breed) => {
          return (
            <option value={breed} key={breed}>
              {breed}
            </option>
          );
        })}
      </select>
      {error && (
        <h1 className="text-red-600 font-bold">
          Error occurred: {error.message}
        </h1>
      )}
      <button className="bg-slate-900 hover:bg-slate-800 py-2 px-4 rounded-md text-white">
        Search
      </button>
    </form>
  );
};
