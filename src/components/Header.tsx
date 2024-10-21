import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">Reichman Insider</Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/telecommunications" className="hover:text-blue-200">Telecommunications</Link>
            <Link to="/economy" className="hover:text-blue-200">Economy</Link>
            <Link to="/business" className="hover:text-blue-200">Business</Link>
            <Link to="/computer-science" className="hover:text-blue-200">Computer Science</Link>
          </nav>
          <Link to="/login" className="hidden md:flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded">
            <User className="h-5 w-5" />
            <span>Login</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/telecommunications" className="hover:text-blue-200">Telecommunications</Link>
            <Link to="/economy" className="hover:text-blue-200">Economy</Link>
            <Link to="/business" className="hover:text-blue-200">Business</Link>
            <Link to="/computer-science" className="hover:text-blue-200">Computer Science</Link>
            <Link to="/login" className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;