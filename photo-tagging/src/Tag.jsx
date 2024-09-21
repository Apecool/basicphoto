import React, { useState } from 'react';
import axios from 'axios';

const TagGuessing = ({ photoUrl, photoId, setMessage }) => {
  const handleClick = async (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    const response = await axios.post('http://localhost:3000/api/tag', { photoId, x, y });
    setMessage(response.data.message);
  };

  return (
    <div onClick={handleClick} style={{ position: 'relative', border: '1px solid #ccc', marginTop: '10px' }}>
      <img src={photoUrl} alt="Tagging" style={{ width: 'auto', height: 'auto', maxWidth: 'none' }} />
    </div>
  );
};

export default TagGuessing ;
