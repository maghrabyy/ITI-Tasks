import { createContext, useState, useContext } from 'react';

const AdoptedPetContext = createContext();

export const useAdoptedPetContext = () => {
  return useContext(AdoptedPetContext);
};

export const AdoptedPetProvider = ({ children }) => {
  const [adoptedPet, setAdoptedPet] = useState(null);
  return (
    <AdoptedPetContext.Provider value={{ adoptedPet, setAdoptedPet }}>
      {children}
    </AdoptedPetContext.Provider>
  );
};
