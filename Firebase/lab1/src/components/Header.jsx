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
  // console.log(auth.currentUser.displayName);
  // console.log('test');
  return (
    <header className="flex justify-between items-center py-4 px-10">
      <div className="main">
        <h1 className="font-bold text-2xl">ITI Courses</h1>
        <h2 className="text-xl ms-2">
          Welcome,{' '}
          <span className="font-bold">{auth.currentUser.displayName}</span>
        </h2>
      </div>
      <button className="btn bg-red-500" onClick={logoutUser}>
        Logout
      </button>
    </header>
  );
};
