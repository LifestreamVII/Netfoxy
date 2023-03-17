import React, { useState, useEffect } from 'react';
import UploadFiles from "../components/UploadFiles";
import auth from '../helpers/auth';

function DashboardElement() {
  const [dbUsername, setDbUsername] = useState('');
  const [dbPassword, setDbPassword] = useState('');
  const [dbRoot, setDbRoot] = useState('');
  const [dbUrl, setDbUrl] = useState('');

  const {getUsername} = auth();

  const username = getUsername();

  useEffect(() => {
    if (username){
      fetch("http://localhost:8000/users")
        .then(response => response.json())
        .then(data => {
          let userdata = data.find(user => user.username === username);
          if (userdata.dbuser && userdata.dbpassword && userdata.dbroot && userdata.dburl){
            setDbUsername(userdata.dbuser);
            setDbPassword(userdata.dbpassword);
            setDbRoot(userdata.dbroot);
            setDbUrl("http://"+userdata.dburl+"hermajesty.rip/");
          }
        })
        .catch(error => console.log(error));
    }
  }, []);

  return (
    <div className="dashboard">
    <div className="bg-gradient-to-r gap-3 from-cyan-500 to-blue-800 flex items-stretch p-6 md:px-16 rounded-3xl text-white duration-500">
      <div className="flex-auto flex flex-col gap-x-5 justify-between md:flex-row md:justify-around md:items-center">
        <div>
        <UploadFiles></UploadFiles>
          <p className="text-7xl md:text-9xl">Nom d'utilisateur machine: {dbUsername}</p>
          <p className="text-xl md:text-3xl capitalize">
            Mot de passe de l'utilisateur machine: {dbPassword}
          </p>
        </div>

        <div className="text-lg md:text-5xl lg:text-6xl">
          <p>
            Racine du site: {dbRoot}
          </p>
          <div className="text-sm md:mt-9 md:text-xl lg:text-2xl">
            URL du site: <a href={dbUrl} target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}