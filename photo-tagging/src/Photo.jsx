import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TagGuessing from './Tag';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch photos from the backend
    const fetchPhotos = async () => {
      const response = await axios.get('http://localhost:3000/api/photos'); // Adjust URL as needed
      setPhotos(response.data);
    };

    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setMessage(''); // Reset message on new selection
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className="gallery">
        {photos.map(photo => (
          <img 
            key={photo.id} 
            src={photo.url} 
            alt={photo.name} 
            onClick={() => handlePhotoClick(photo)} 
            style={{ cursor: 'pointer', width: '150px', height: '150px', margin: '5px' }} 
          />
        ))}
      </div>

      {selectedPhoto && (
        <div>
          <h2>{selectedPhoto.name}</h2>
          <TagGuessing photoUrl={selectedPhoto.url} photoId={selectedPhoto.id} setMessage={setMessage} />
          <div>{message}</div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
