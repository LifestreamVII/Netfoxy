import React from 'react'
import StoragePlans from "../components/StoragePlans";
import auth from "../helpers/auth";

function Setup() {
  const {getUsername} = auth();

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
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" value="Jane Doe" />
            </div>
            
            <div class="w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" value="Jane Doe" />
            </div>
            
          </div>
          
          <hr class="border border-gray-200 my-10"/>
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Mise en place de votre Site Web</h3>
              <p class="text-sm text-gray-500">Informations concernant votre site</p>
            </div>
            
            <div class="w-1/4 mr-5">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" value="Jane Doe" />
            </div>
            
            <div class="w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" value="Jane Doe" />
            </div>
            
          </div>
          
        </section>
        <StoragePlans/>
    </div>
  )
}

export default Setup