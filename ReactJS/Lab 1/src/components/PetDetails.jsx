import { petTypeIcon } from '../utils/petsIcons';
import { Carousel } from './Carousal';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adopt } from '../Store/adoptedPetSlice';

export const PetDetails = ({ pet }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adoptPet = (pet) => {
    dispatch(adopt(pet));
    navigate('/');
  };

  return (
    <div className="detail-page">
      <div className="pet-details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white bg-black bg-opacity-60 rounded-md p-4">
        <Carousel images={pet.images} />
        <div className="pet-info flex flex-col items-center gap-2 justify-center">
          <h1 className="pet-name font-bold text-4xl">{pet.name}</h1>
          <h3 className="pet-type text-xl flex gap-2 items-center">
            {petTypeIcon(pet.animal)}
            {pet.animal} - {pet.breed}
          </h3>
          <h3 className="pet-location text-xl">
            {pet.city}, {pet.state}
          </h3>
          <button
            onClick={() => adoptPet(pet)}
            className="btn adopt flex gap-2 items-center"
          >
            <FaHome />
            Adopt Me
          </button>
        </div>
        <div className="pet-desc md:col-span-2 self-center">
          <h3 className="font-bold text-2xl">About {pet.name}</h3>
          <p className="text-lg ps-2">{pet.description}</p>
        </div>
      </div>
    </div>
  );
};
