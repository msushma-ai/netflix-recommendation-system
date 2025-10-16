import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <h1 className="text-2xl font-bold">Netflix</h1>
      <div>
        <button className="px-4 py-2 bg-red-600 rounded">Sign In</button>
      </div>
    </nav>
  );
}
