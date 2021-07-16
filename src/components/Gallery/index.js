import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Gallery = ({ gallery, title }) => {
  return (
    <div className="gallery">
      <h2 className="folder-title yellow">{title}</h2>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="image-grid">
            {gallery.map((photo, index) => {
              return (
                <GalleryPhoto key={photo.id} index={index} {...photo} />
              ) 
            })}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
};

export default Gallery;
