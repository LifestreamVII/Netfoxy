import React, { useState, useEffect } from 'react';
import UploadFiles from "../components/UploadFiles";
import auth from '../helpers/auth';

function DashboardElement() {
  const [dbUsername, setDbUsername] = useState('');
  const [dbPassword, setDbPassword] = useState('');
  const [dbRoot, setDbRoot] = useState('');
  const [dbUrl, setDbUrl] = useState('');
  const mysql = "localhost:3306";
  const phpmyadminurl = "http://pma.hermajesty.rip/phpmyadmin";
  const {getUsername} = auth();

  const usrname = getUsername();

  useEffect(() => {
    if (usrname){
      fetch("http://localhost:8000/users")
        .then(response => response.json())
        .then(data => {
          let userdata = data.find(user => user.username === usrname);
          if (userdata.dbuser && userdata.dbpass && userdata.dbroot && userdata.dburl){
            setDbUsername(userdata.dbuser);
            setDbPassword(userdata.dbpass);
            setDbRoot(userdata.dbroot);
            setDbUrl("http://"+userdata.dburl+".hermajesty.rip/");
          }
        })
        .catch(error => console.log(error));
    }
  }, []);

  return (
    <div>
        <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                <h1 class="font-bold pl-2">Configuration</h1>
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-green-600"><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Mettre en ligne votre site (.ZIP)</h2>
                            <UploadFiles username={dbUsername} root={dbRoot}></UploadFiles>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-green-600"><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Nom d'utilisateur machine</h2>
                            <p class="font-bold text-1xl">{dbUsername}<span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-pink-600"><i class="fas fa-users fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Mot de passe de l'utilisateur machine</h2>
                            <p class="font-bold text-1xl">{dbPassword} <span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-yellow-600"><i class="fas fa-user-plus fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Racine du site</h2>
                            <p class="font-bold text-1xl">{dbRoot} <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-blue-600"><i class="fas fa-server fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">URL du site</h2>
                            <p class="font-bold text-1xl">{dbUrl}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-blue-600"><i class="fas fa-server fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Serveur MySQL</h2>
                            <p class="font-bold text-1xl">{mysql}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-green-600"><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Adresse phpMyAdmin</h2>
                            <p class="font-bold text-1xl">{phpmyadminurl}<span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-green-600"><i class="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Serveur FTP</h2>
                            <p class="font-bold text-1xl">URL : ftp://hermajesty.rip<span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                            <p class="font-bold text-1xl">Login : {dbUsername}<span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                            <p class="font-bold text-1xl">Pass : {dbPassword}<span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
//     <div className="dashboard">
//     <div className="bg-gradient-to-r gap-3 from-cyan-500 to-blue-800 flex items-stretch p-6 md:px-16 rounded-3xl text-white duration-500">
//       <div className="flex-auto flex flex-col gap-x-5 justify-between md:flex-row md:justify-around md:items-center">
//         <div>
//         <UploadFiles></UploadFiles>
//           <p className="text-sm md:mt-9 md:text-xl lg:text-2xl">Nom d'utilisateur machine: {dbUsername}</p>
//           <p className="text-sm md:mt-9 md:text-xl lg:text-2xl">
//             Mot de passe de l'utilisateur machine: {dbPassword}
//           </p>
//         </div>

//         <div className="text-sm md:mt-9 md:text-xl lg:text-2xl">
//           <p>
//             Racine du site : {dbRoot}
//           </p>
//           <div className="text-sm md:mt-9 md:text-xl lg:text-2xl">
//             URL du site: <a href={dbUrl} target="_blank" rel="noopener noreferrer"></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
  );
}

export default DashboardElement