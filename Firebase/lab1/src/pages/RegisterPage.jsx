import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
    if (fullName && email && password) {
      setIsLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName: fullName });
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          fullName,
          email,
          favoriteCourses: [],
        });
        setIsLoading(false);
        navigate('/');
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-2 py-6 px-4 rounded-md border border-black min-w-[400px]"
      >
        <h1 className="text-4xl font-bold mb-2">Register</h1>
        <label htmlFor="name">Full Name</label>
        <input
          placeholder="Enter your full name."
          type="text"
          id="name"
          name="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="inpt"
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email address."
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="inpt"
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your password."
          type="password"
          id="password"
          name="password"
          required
          className="inpt"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleRegister} className="btn" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
        <p>
          Already have an account?{' '}
          <Link className="text-blue-600" to="/">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
