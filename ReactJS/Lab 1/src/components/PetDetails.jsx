import { petTypeIcon } from '../utils/petsIcons';

export const PetDetails = ({ pet }) => {
  return (
    <div className="detail-page">
      <div className="pet-detail grid grid-cols-4 gap-4 text-white bg-black bg-opacity-60 rounded-md p-4">
        <div className="pet-main-img">
          <img src={pet.images[0]} alt={pet.name} />
        </div>
        <div className="pet-info flex flex-col items-center gap-2 justify-center">
          <h1 className="pet-name font-bold text-4xl">{pet.name}</h1>
          <h3 className="pet-type text-xl flex gap-2 items-center">
            {petTypeIcon(pet.animal)}
            {pet.animal} - {pet.breed}
          </h3>
          <h3 className="pet-location text-xl">
            {pet.city}, {pet.state}
          </h3>
          <button className="btn adopt">Adopt Me</button>
        </div>
        <p className="pet-desc text-lg p-2 col-span-2 self-center">
          {pet.description}
        </p>
      </div>
    </div>
  );
};
