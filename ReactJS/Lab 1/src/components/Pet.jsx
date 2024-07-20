import { petTypeIcon } from '../utils/petsIcons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Pet = ({ id, name, type, breed, petImg, location, desc }) => {
  return (
    <Link
      to={`/details/${id}`}
      className="pet bg-black bg-opacity-60 text-white rounded-md px-3 py-2 hover:scale-105"
    >
      <div className="pet-img-name flex gap-2 items-center">
        <img src={petImg} className="rounded-full size-8" alt={desc} />
        <h1 className="font-bold text-2xl">{name}</h1>
      </div>
      <div className="pet-info ps-2 py-2">
        <div className="pet-type flex gap-2">
          {petTypeIcon(type)}
          <h2 className="text-xl">
            {type} - {breed}
          </h2>
        </div>
        <h2 className="text-xl flex gap-2 items-center">
          <FaMapMarkerAlt />
          {location}
        </h2>
      </div>
    </Link>
  );
};
