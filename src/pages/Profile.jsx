import React, { useState } from 'react';
import axios from 'axios';

function Profile({ user }) {
  const [foto, setFoto] = useState(null);

  const handleFileChange = (e) => setFoto(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("foto", foto);

    try {
      await axios.post(`http://localhost:5000/api/users/upload-photo/${user.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      alert("Foto cambiada ✅");
    } catch (error) {
      console.error("Error al subir la foto:", error);
      alert("Hubo un error al cambiar la foto.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cambiar foto</button>
    </div>
  );
}

export default Profile;