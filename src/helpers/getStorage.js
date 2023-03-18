import axios from 'axios';

let error = null;

const getStorage = async (username) => {
  error = null;
  try {
    const sto = await axios.post('http://hermajesty.rip:25565/api/storage', {username: username}, {
        headers: {
          'Content-Type': 'application/json'
        }
    })
    return sto.data;
  }
  catch(e) {
    console.error("Error fetching storage data: ", e)
    error = e;
  }
}

const getStorageRun = () => {
  return { error, getStorage }
}

export default getStorageRun