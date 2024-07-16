import { FaCat, FaDog } from 'react-icons/fa';
import { PiBirdFill } from 'react-icons/pi';
import { MdOutlinePets } from 'react-icons/md';
import { GiRabbit } from 'react-icons/gi';

export const petTypeIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'cat':
      return <FaCat />;
    case 'dog':
      return <FaDog />;
    case 'bird':
      return <PiBirdFill />;
    case 'rabbit':
      return <GiRabbit />;
    default:
      return <MdOutlinePets />;
  }
};
