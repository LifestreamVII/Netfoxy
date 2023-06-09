import React from 'react'
import { Link } from 'react-router-dom';
import auth from "../helpers/auth";

function Navbar() {
  const {isLogged} = auth();
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Accueil
            </Link>
          </div>
          <div className="hidden md:block">
          { isLogged() ?
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/signout" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Se déconnecter
                </Link>
              </div>
            :
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Commencer
                </Link>
              </div>
          }
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/setup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Configuration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar