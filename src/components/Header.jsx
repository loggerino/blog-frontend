import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, onLogout }) {
    const handleLogout = () => {
        onLogout(false);
    };

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                        Home
                    </Link>
                    <div className="flex space-x-4">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="text-sm font-medium text-gray-500 hover:text-gray-900"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                    Login
                                </Link>
                                <Link to="/signup" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
