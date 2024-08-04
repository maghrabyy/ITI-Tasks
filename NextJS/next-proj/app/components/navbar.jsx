import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="mainP flex justify-between bg-slate-600 text-white">
      <div className="logo font-bold text-xl select-none">Next Task</div>
      <ul className="flex gap-3">
        <li className="hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/users/my-profile">Profile</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/products">Products</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/movies">Movies</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
