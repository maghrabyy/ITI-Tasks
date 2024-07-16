import { PetList } from '../PetList';
import { Pet } from '../Pet';

export const SearchResult = ({ petsList }) => {
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
            petImg={pet.images[0]}
            name={pet.name}
            type={pet.animal}
            breed={pet.breed}
            desc={pet.description}
            location={`${pet.state}, ${pet.city}`}
          />
        );
      })}
    </PetList>
  );
};
