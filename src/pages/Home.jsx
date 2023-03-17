import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenue</h1>
          <p className="mt-1 text-lg text-gray-500">Vous êtes sur le point de découvrir quelque chose d'incroyable.</p>
          <div className="mt-5">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700">
            <a href="/setup">Commencer maintenant</a>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900">À propos de l'équipe</h2>
            <p className="mt-2 text-gray-600">Notre équipe est composé de 7 membres voici leur plus grande qualité</p>
            <ul className="mt-4 text-gray-600">
              <li className="list-disc">BG</li>
              <li className="list-disc">Smart</li>
              <li className="list-disc">Super cool</li>
            </ul>
          </div>
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900">Services</h2>
            <ul className="mt-4 text-gray-600">
              <li className="list-disc">Développement de sites web</li>
              <li className="list-disc">Conception de sites web</li>
              <li className="list-disc">Optimisation de la vitesse du site</li>
              <li className="list-disc">Argent garanti</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">Notre équipe</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;