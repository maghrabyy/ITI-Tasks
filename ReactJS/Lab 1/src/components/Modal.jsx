import { createPortal } from 'react-dom';

export const Modal = ({ children, setShowModal }) => {
  const modalStyle = 'p-4 rounded-md bg-orange-900 mx-4';
  const modalOverlayStyle = 'fixed z-20 bg-black bg-opacity-70 inset-0';
  return createPortal(
    <div
      onClick={() => setShowModal(false)}
      className={`${modalOverlayStyle} flex items-center justify-center`}
    >
      <div onClick={(e) => e.stopPropagation()} className={modalStyle}>
        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
};
