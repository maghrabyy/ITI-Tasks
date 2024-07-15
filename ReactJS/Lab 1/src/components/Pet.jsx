import { FaCat, FaDog } from 'react-icons/fa';
import { PiBirdFill } from 'react-icons/pi';
import { MdOutlinePets } from 'react-icons/md';

export const Pet = ({ name, type, breed }) => {
  const catTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'cat':
        return <FaCat />;
      case 'dog':
        return <FaDog />;
      case 'bird':
        return <PiBirdFill />;
      default:
        return <MdOutlinePets />;
    }
  };
  return (
    <div className="pet bg-black bg-opacity-60 text-white rounded-md px-3 py-2">
      <h1 className="font-bold text-2xl">{name}</h1>
      <div className="pet-type flex items-center gap-2">
        {catTypeIcon(type)}
        <h2 className="text-2xl">{type}</h2>
      </div>
      <h2 className="text-2xl">{breed}</h2>
    </div>
  );
};
