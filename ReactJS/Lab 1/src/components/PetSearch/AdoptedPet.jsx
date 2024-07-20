import { petTypeIcon } from '../../utils/petsIcons';
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const AdoptedPet = () => {
  const adoptedPet = useSelector((state) => {
    return state.adoptedPet.value;
  });
  return (
    <div className="adopted-pet flex flex-col gap-3 bg-black bg-opacity-60 px-4 py-6 rounded-md">
      <h1 className="text-3xl font-bold text-white flex gap-2 items-center">
        <FaHome />
        My adopted pet
      </h1>
      {adoptedPet ? (
        <div className="view-adopted-pet flex gap-2 items-center">
          <img
            src={adoptedPet.images[0]}
            className="w-16 rounded-full"
            alt={adoptedPet.name}
          />
          <div className="adopted-pet-info">
            <h2 className="text-2xl font-bold text-white">{adoptedPet.name}</h2>
            <h2 className="text-xl text-white flex gap-2 items-center">
              {petTypeIcon(adoptedPet.animal)}
              {adoptedPet.animal} - {adoptedPet.breed}
            </h2>
          </div>
        </div>
      ) : (
        <h1 className="text-white font-lg text-center">
          You haven&apos;t adopted a pet yet.
        </h1>
      )}
    </div>
  );
};
