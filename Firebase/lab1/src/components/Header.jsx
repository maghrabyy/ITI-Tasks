import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export const Header = () => {
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };
  return (
    <header className="flex justify-between items-center py-4 px-10">
      <h1 className="font-bold text-2xl">ITI Courses</h1>
      <button className="btn bg-red-500" onClick={logoutUser}>
        Logout
      </button>
    </header>
  );
};
