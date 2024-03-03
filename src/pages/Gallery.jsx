import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Ensure CSS is imported for styling

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    // You can add more images here
  ];

  return (
    <div>
      <h1 className="text-6xl font-bold mb-6 cursiveFont text-center">
        Gallery
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.thumbnail}
              alt={`Thumbnail ${index}`}
              className="cursor-pointer"
              onClick={() => openGallery(index)}
            />
          ))}
        </div>

        {isOpen && (
          <div className="gallery-overlay" onClick={closeGallery}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
              <ImageGallery
                items={images}
                startIndex={currentImage}
                onSlide={(currentIndex) => setCurrentImage(currentIndex)}
                showFullscreenButton={true}
                showPlayButton={false}
                showThumbnails={true}
                showNav={true}
                showBullets={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
