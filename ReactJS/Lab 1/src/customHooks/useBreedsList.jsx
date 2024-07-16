import { useState, useEffect } from 'react';

const breedsCache = {};

export const useBreedsList = (animalType) => {
  const [breedList, setBreedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchBreedList = () => {
    setError(null);
    setIsLoading(true);
    fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animalType}`)
      .then((res) => res.json())
      .then((data) => {
        breedsCache[animalType] = data.breeds || [];
        setBreedList(breedsCache[animalType]);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (animalType) {
      if (!breedsCache[animalType]) {
        fetchBreedList();
      } else {
        setBreedList(breedsCache[animalType]);
      }
    } else {
      setBreedList([]);
    }
  }, [animalType]);

  return { breedList, isLoading, error };
};
