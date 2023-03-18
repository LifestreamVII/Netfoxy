import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import { Progress } from "@material-tailwind/react";

function FileUpload({username, root}) {
  const [file, setFile] = useState(null);
  const [progress, progressChange] = useState(null);

  async function sendFileData(data) {
    axios.post('http://hermajesty.rip:25565/api/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
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
                toast.success('Site déployé avec succès');
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    if (username.length > 0 && root.length > 0){
      formData.append('username', username);
      formData.append('root', root);
      await sendFileData(formData);
    }
  };

  return (
    <div>
      <form className={progress == null ? "" : "hidden"} onSubmit={handleSubmit}>
        <div class="flex w-full pl-10 pt-5">
              <div class="w-1/2">
                <input type="file" accept=".zip" onChange={handleFileChange} />
              </div>
              <div class="w-1/4">
                <button className='block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3' type="submit">Confirmer</button>
              </div>
        </div>
      </form>
      <div className='pt-4 pb-4'>
            { progress != null && progress != 255 
              ? <Progress value={progress} label="complété" />
              : ""
            }
      </div>
    </div>
  );
}

export default FileUpload;
