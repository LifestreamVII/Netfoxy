import { useEffect, useState } from 'react'
import StoragePlans from "../components/StoragePlans";
import auth from "../helpers/auth";

function Setup() {
  const {getUsername} = auth();
  const [amount, setAmount] = useState(100);
  
  return (
    <div>
        <section class="bg-gray-200">
          <div class="container mx-auto pt-8 pb-8">
            <h1 class="text-2xl font-bold text-blue-900">Configuration</h1>
            <p class="text-sm text-gray-500">Connecté en tant que {getUsername()}</p>
          </div>
        </section>

        <section class="container mx-auto pt-10">
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Créer votre base de données</h3>
              <p class="text-sm text-gray-500">Informations désirées pour la connexion MySQL</p>
            </div>
            
            <div class="w-1/4 mr-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Nom d'utilisateur</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" />
              <p className='text-gray-500 text-sm pt-3 italic'>Le nom de la base de données sera basé sur le pseudo que vous avez indiqué lors de votre inscription.</p>
            </div>
            
            <div class="w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Mot de passe</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="password" />
            </div>
            
          </div>
          
          <hr class="border border-gray-200 my-10"/>
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Mise en place de votre Site Web</h3>
              <p class="text-sm text-gray-500">Informations concernant votre site</p>
            </div>
            
            <div class="w-1/4 mr-5">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">URL</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" />
              <span className='text-gray-500 text-sm pl-2'>.hermajesty.rip</span>
            </div>
            
            <div class="w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Racine du site</label>
              <div class="flex items-center mb-1">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-700">/</label>
              </div>
              <div class="flex items-center">
                  <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-700">Autre : /</label>
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-3" id="inline-full-name" type="text" />
              </div>
            </div>
            
          </div>
          
          <hr class="border border-gray-200 my-10"/>
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Espace de stockage</h3>
              <p class="text-sm text-gray-500">Choisissez le volume de stockage dont vous avez besoin</p>
            </div>
            
            <div class="w-2/4 mr-5">
                <StoragePlans amount={amount} setAmount={setAmount} className="pt-3 pb-3"/>
            </div>
            
          </div>

        </section>
    </div>
  )
}

export default Setup