import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // State for login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="flex flex-col gap-2 py-6 px-4 rounded-md border border-black min-w-[400px]">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email address."
          type="email"
          id="email"
          name="email"
          required
          className="inpt"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button onClick={handleLogin} className="btn" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        <p>
          Dont have an account?{' '}
          <Link className="text-blue-600" to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
