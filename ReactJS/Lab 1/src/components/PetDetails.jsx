import { petTypeIcon } from '../utils/petsIcons';
import { Carousel } from './Carousal';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adopt } from '../Store/adoptedPetSlice';
import { useState } from 'react';
import { Modal } from './Modal';

export const PetDetails = ({ pet }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adoptPet = (pet) => {
    dispatch(adopt(pet));
    navigate('/');
    setShowModal(false);
  };

  return (
    <div className="detail-page">
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <div className="modal-header mb-4 text-white text-lg flex gap-2 items-center">
            <FaHome />
            Adopt pet
          </div>
          <div className="modal-body text-white">
            <h2 className="text-2xl">
              Are you sure you want to adopt {pet.name}?
            </h2>
          </div>
          <div className="modal-action flex justify-center gap-2 mt-5">
            <button
              onClick={() => adoptPet(pet)}
              className="btn adopt flex gap-2 items-center"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="btn adopt flex gap-2 items-center"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
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
            onClick={() => setShowModal(true)}
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
