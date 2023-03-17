import { useEffect, useState } from 'react'
import StoragePlans from "../components/StoragePlans";
import auth from "../helpers/auth";
import { toast } from "react-toastify";
import axios from 'axios';
import { Progress } from "@material-tailwind/react";


function Setup() {
  const {getUsername} = auth();
  const {getId} = auth();
  const [storage, setStorage] = useState(100);
  const [user, usernamechange] = useState("");
  const [dbpass, passwordchange] = useState("");
  const [domain, domainchange] = useState("");
  const [root, rootchange] = useState("www");
  const [progress, progressChange] = useState(null);

  async function sendSetupData(data) {
    axios.post('http://hermajesty.rip:25565/api/setup', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.data) {
        progressChange(null);
        toast.error('Erreur lors du traitement');
        throw new Error(`Erreur HTTP - status: ${response.status}`);
      }
      if (response.data.task_id){
        let taskId = response.data.task_id;
        console.log(`Task ID: ${taskId}`);
        progressChange(0);
        const intervalId = setInterval(() => {
          fetch(`http://hermajesty.rip:25565/status/${taskId}`)
          .then(response => {
            if (!response.ok) {
              progressChange(null);
              toast.error('Erreur lors du traitement');
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(status => {
            console.log(status);
            progressChange(status.progress_percent);
            if (status.state === 'SUCCESS') {
              clearInterval(intervalId);
              progressChange(100);
              setTimeout(() => {
                progressChange(255);
              }, 700);
            }
          })
          .catch(error => {
            console.error(error);
            progressChange(null);
            toast.error('Erreur lors du traitement :' + error);
            clearInterval(intervalId);
          });
        }, 1000);
      }
      else {
        progressChange(null);
        toast.error('Erreur lors du traitement');
        throw new Error(`Erreur pendant le traitement, vos données n'ont pas été sauvegardées.`);
      }
    })
    .catch(error => {
      progressChange(null);
      console.error(error);
      toast.error('Erreur lors du traitement :' + error);
    });
  }

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Valeur manquante dans : ';
    if (user === null || user === '') {
        isproceed = false;
        errormessage += "Nom d'utilisateur";
    }
    if (dbpass === null || dbpass === '') {
        isproceed = false;
        errormessage += 'Mot de passe';
    }
    if (domain === null || domain === '') {
        isproceed = false;
        errormessage += 'Domaine';
    }
    if (root === null || root === '') {
        rootchange("www");
    }

    if (!isproceed) {
        toast.warning(errormessage)
    }
    return isproceed;
}


const handlesubmit = async (e) => {
    e.preventDefault();
    let data = { storage, user, dbpass, domain, root };
    if (IsValidate()) {
      console.log(data);
      await sendSetupData(data);
      sessionStorage.removeItem("status");
      let id = getId();
      if (id){
        fetch("http://localhost:8000/users/"+id)
        .then((response) => {
          return response.json(); // parse response to JSON
        })
        .then((data) => {
          let newdata = {
            storage: storage,
            dbuser: user,
            dbpass: dbpass,
            dburl: domain,
            dbroot: root
          }
          if (data.status)
          {
            delete data.status;
          }
          let updatedData = {...data, ...newdata};
          return fetch("http://localhost:8000/users/"+id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedData)
          });
        }).catch((err) => {
          toast.error('Erreur lors du traitement :' + err.message);
        });
      }
    }
}
  
  return (
    <div>
        <section class="bg-gray-200">
          <div class="container mx-auto pt-8 pb-8">
            <h1 class="text-2xl font-bold text-blue-900">Configuration</h1>
            <p class="text-sm text-gray-500">Connecté en tant que {getUsername()}</p>
          </div>
        </section>

        <form className={progress == null ? "container mx-auto pt-10" : "hidden"} action="#" onSubmit={handlesubmit}>
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Créer votre base de données</h3>
              <p class="text-sm text-gray-500">Informations désirées pour la connexion MySQL</p>
            </div>
            
            <div class="w-1/4 mr-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Nom d'utilisateur</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" required value={user} onChange={e => usernamechange(e.target.value)} />
              <p className='text-gray-500 text-sm pt-3 italic'>Le nom de la base de données sera basé sur le pseudo que vous avez indiqué lors de votre inscription.</p>
            </div>
            
            <div class="w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Mot de passe</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="password" required value={dbpass} onChange={e => passwordchange(e.target.value)} />
            </div>
            
          </div>
          
          <hr class="border border-gray-200 my-10"/>
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Mise en place de votre Site Web</h3>
              <p class="text-sm text-gray-500">Informations concernant votre site</p>
            </div>
            
            <div class="w-1/4 mr-5">
              <label class="block text-gray-700 text-sm font-bold mb-2">URL</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" required value={domain} onChange={e => domainchange(e.target.value)} />
              <span className='text-gray-500 text-sm pl-2'>.hermajesty.rip</span>
            </div>
            
            <div class="w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Racine (par défaut : /www/)</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" required value={root} onChange={e => rootchange(e.target.value)} />
            </div>
            
          </div>
          
          <hr class="border border-gray-200 my-10"/>
          
          <div class="flex">
            <div class="w-1/4">
              <h3 class="text-blue-900 text-sm font-bold">Espace de stockage</h3>
              <p class="text-sm text-gray-500">Choisissez le volume de stockage dont vous avez besoin</p>
            </div>
            
            <div class="w-2/4 mr-5">
                <StoragePlans amount={storage} setAmount={setStorage} className="pt-3 pb-3"/>
            </div>
            
          </div>

          <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Finaliser la configuration</button>
          
        </form>
        <div className='mt-4 mb-4'>
            { progress != null && progress != 255 
              ? <Progress value={progress} label="Completed" />
              : ""
            }
        </div>
    </div>
  )
}

export default Setup