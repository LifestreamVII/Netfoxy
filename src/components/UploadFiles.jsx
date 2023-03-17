import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const headers = {
      'Content-Type': 'multipart/form-data'
    };

    // Make API call to upload file
    fetch('/upload', {
      method: 'POST',
      headers,
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
