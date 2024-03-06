import React, { useState } from 'react';
import upload from '../images/upload.gif'

function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(event)
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('csv', selectedFile);

    try {
      const response = await fetch('http://localhost:3001/fileUpload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Upload a CSV File</h2>
      <input type="file" onChange={handleFileChange} accept=".csv"/> 
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUploadComponent;