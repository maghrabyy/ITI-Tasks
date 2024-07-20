import { createContext, useState, useContext } from 'react';

const SearchFormContext = createContext();

export const useSearchFormContext = () => {
  return useContext(SearchFormContext);
};

export const SearchFormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    location: '',
    animalType: '',
    animalBreed: '',
  });
  return (
    <SearchFormContext.Provider value={{ formState, setFormState }}>
      {children}
    </SearchFormContext.Provider>
  );
};
