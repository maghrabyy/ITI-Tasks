import { createPortal } from 'react-dom';

export const Modal = ({ children, setShowModal }) => {
  const modalStyle = 'p-4 rounded-md bg-orange-900 mx-4';
  const modalOverlayStyle =
    'fixed z-20 w-full h-full bg-black bg-opacity-70 top-0 left-0 inset-0';
  return createPortal(
    <div
      onClick={() => setShowModal(false)}
      className={`${modalOverlayStyle} flex items-center justify-center`}
    >
      <div className={modalStyle}>{children}</div>
    </div>,
    document.getElementById('modal'),
  );
};
