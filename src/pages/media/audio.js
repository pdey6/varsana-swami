import React from "react";
import { graphql } from "gatsby";
import Playlist from "../../components/Playlist";
import {
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CAccordionHeader,
} from "@coreui/react";
import styled from "styled-components";

const Audio = ({ data }) => {
  const twentyone = data.twentyone.nodes;
  const twenty = data.twenty.nodes;
  const nineteen = data.nineteen.nodes;
  const eighteen = data.eighteen.nodes;
  const seventeen = data.seventeen.nodes;
  const sixteen = data.sixteen.nodes;
  const fifteen = data.fifteen.nodes;
  const fourteen = data.fourteen.nodes;
  const twelve = data.twelve.nodes;
  const eleven = data.eleven.nodes;

  const festivals = data.festivals.nodes;
  const various = data.various.nodes;
  const srimad = data.srimad.nodes;
  const chaitanya = data.chaitanya.nodes;
  const bhagavad = data.bhagavad.nodes;
  const kirtans = data.kirtans.nodes;

  return (
    <Wrapper>
      <main className="page">
        <header className="page-header">
          <h2 className="page-title media-title yellow">Audio</h2>
        </header>

        <section className="page-content">
          <div className="page-content-center">
            <CAccordion flush>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader className="folder-title folder-margin-bottom">
                  Yearly
                </CAccordionHeader>
                <CAccordionBody>
                  <Playlist playlist={twentyone} title="2021" />
                  <Playlist playlist={twenty} title="2020" />
                  <Playlist playlist={nineteen} title="2019" />
                  <Playlist playlist={eighteen} title="2018" />
                  <Playlist playlist={seventeen} title="2017" />
                  <Playlist playlist={sixteen} title="2016" />
                  <Playlist playlist={fifteen} title="2015" />
                  <Playlist playlist={fourteen} title="2014" />
                  <Playlist playlist={twelve} title="2012" />
                  <Playlist playlist={eleven} title="2011" />
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>

            <Playlist playlist={festivals} title="Festivals" />
            <Playlist playlist={various} title="Various" />
            <Playlist playlist={srimad} title="Srimad Bhagavatam" />
            <Playlist playlist={chaitanya} title="Chaitanya-caritamrta" />
            <Playlist playlist={bhagavad} title="Bhagavad-gita" />
            <Playlist playlist={kirtans} title="Bhajans & Kirtans" />
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default Audio;



const Wrapper = styled.div`
  

  .folder-title {
    margin: 1.5em 0;
    background-color: var(--green);
  }

  .folder-margin-bottom {
    margin-bottom: 0; 
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
`;


export const query = graphql`
  {
    yearly: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/yearly/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    twentyone: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2021/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    twenty: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2020/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    nineteen: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2019/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    eighteen: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2018/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    seventeen: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2017/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    sixteen: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2016/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    fifteen: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2015/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    fourteen: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2014/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    twelve: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2012/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    eleven: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/2011/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    festivals: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/festivals/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    various: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/various/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    srimad: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/srimad-bhagavatam/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    chaitanya: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/chaitanya-caritamrta/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    bhagavad: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/chaitanya-caritamrta/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    kirtans: allCloudinaryMedia(
      filter: {
        resource_type: { eq: "video" }
        public_id: { regex: "Audio/bhajans-and-kirtans/" }
      }
      sort: { order: DESC, fields: public_id }
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
  }
`;

