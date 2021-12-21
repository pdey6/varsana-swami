import React from "react";
import AudioFile from "./AudioFile";
import styled from "styled-components";
import {
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CAccordionHeader,
} from "@coreui/react";


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
  folderName = folderName.substr(splice + 1);
  return folderName;
}

const Playlist = ({ playlist, title }) => {
  return (
    <Wrapper className="audio">
      <CAccordion flush>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader className="folder-title">{title}</CAccordionHeader>
          <CAccordionBody className="accordion-body">
            <div className="audio-playlist">
              {playlist.map((file, index) => {
                let name = cleanTitle(file.public_id);
                return (
                  <AudioFile
                    key={file.id}
                    index={index}
                    name={name}
                    {...file}
                  />
                );
              })}
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </Wrapper>
  );
};

export default Playlist;

const Wrapper = styled.div`
  .audio-playlist {
    max-height: 60vh;
    overflow-y: scroll;
  }

  .folder-title {
    margin: 1.5em 0;
    background-color: var(--green);
    background-color: var(--grey);
  }

  .audio-playlist {
    padding: 0;
  }

  .accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    font-weight: 800;
    padding: 0.25em 2rem;
    font-size: 2rem;
    text-align: left;
    /* background-color: #fff; */
    background-color: inherit;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      border-radius 0.15s ease;
  }

  .accordion-body {
    padding: 0; 
  }

  @media and screen and (min-width: 900px) {
    .audio-playlist {
      padding: 0rem 2rem;
    }
  }
`;
