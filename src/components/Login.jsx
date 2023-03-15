import React, { useState } from 'react';
import { authenticateUser } from '../composables/Auth';
import { Link } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const authenticatedUsername = authenticateUser(username, password);
    if (authenticatedUsername) {
      onLogin(authenticatedUsername);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center">

        <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Se connecter</h1>
            <form className="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700">Username</label>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <p className="mt-8">Besoin d'un compte ? <Link to={'/register'} className="text-blue-500 hover:text-blue-700 font-semibold">S'inscrire</Link></p>
        </div>
    </div>
  );
}

export default LoginForm;