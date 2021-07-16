import React from "react";
import AudioFile from "./AudioFile";
import styled from "styled-components"

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


const Playlist = ({ playlist, title }) => {

  return (
    <Wrapper className="audio">
      <h2 className="folder-title">{title}</h2>
      <div className="audio-playlist">
        {playlist.map((file, index) => {
              let name = cleanTitle(file.public_id)             
              return (
                <AudioFile key={file.id} index={index} name={name} {...file}/> 
              );
            })}
      </div>
    </Wrapper>
  );
};

export default Playlist;

const Wrapper = styled.div`

  .folder-title {
    margin: 1.5em 0;
    background-color : var(--green);
  }

  .audio-playlist {
    padding: 0rem 2rem;
  }
`
