import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImageLightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="image-grid">
      {images.map((media, index) => (
        media.type === 'image' && (
          <img 
            key={index} 
            src={media.src} 
            alt={`media-${index}`} 
            onClick={() => openLightbox(index)} 
          />
        )
      ))}

      {isOpen && (
        <Lightbox
          open={isOpen}
          index={currentImageIndex}
          close={() => setIsOpen(false)}
          slides={images.map(image => ({ src: image.src }))}
        />
      )}
    </div>
  );
};

export default ImageLightbox;
