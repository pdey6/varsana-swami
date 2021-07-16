import React from "react";

function nthIndex(str, pat, n) {
  var L = str.length,
    i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
}

function cleanTitle(folderName) {
  const splice = nthIndex(folderName, "/", 2);
  folderName = folderName.substr(splice + 1)
  return folderName
}

const GalleryPhoto = ({ secure_url, public_id }) => {
  let name = cleanTitle(public_id) 
  return (
    <div className="image-item">
      <img src={secure_url} alt={name} />
    </div>
  );
};

export default GalleryPhoto;
