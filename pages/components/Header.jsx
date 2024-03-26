import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Block from './Block';

const Header = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tok = Cookies.get('token');
    setToken(tok);
  }, []);

  return (
    <header className="flex justify-between items-center bg-gray-900 text-white py-4 px-8">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav className="space-x-4">
        <Block para="Discover exclusive deals for your business" heading="OYO for Business" />
        <Block para="Unlock earning potential by listing your property" heading="List Your Property" />
        <Block para="For inquiries, call us at 8851-752-201" heading="Contact Us" />
      </nav>
      <div className="flex items-center">
        {!token ? (
          <Link href="/login">
            <a className="text-xl font-bold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">Login/Signup</a>
          </Link>
        ) : (
          <button
            onClick={() => {
              Cookies.remove('token');
              router.push('/');
            }}
            className="text-xl font-bold px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
