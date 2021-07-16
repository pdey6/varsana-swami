import React from "react";
import { graphql } from "gatsby";
import Playlist from "../../components/Playlist"

const Audio = ({ data }) => {

  const yearly = data.yearly.nodes
  const festivals = data.festivals.nodes
  const various = data.various.nodes
  const srimad = data.srimad.nodes
  const chaitanya = data.chaitanya.nodes
  const bhagavad = data.bhagavad.nodes
  const kirtans = data.kirtans.nodes
  

  return (
    <>
      <main className="page">
        <header className="page-header">
          <h2 className="page-title media-title yellow">Audio</h2>
        </header>

        <section className="page-content">
          <Playlist playlist={yearly} title="Yearly"/>
          <Playlist playlist={festivals} title="Festivals"/>
          <Playlist playlist={various} title="Various"/>
          <Playlist playlist={srimad} title="Srimad Bhagavatam"/>
          <Playlist playlist={chaitanya} title="Chaitanya-caritamrta"/>
          <Playlist playlist={bhagavad} title="Bhagavad-gita"/>
          <Playlist playlist={kirtans} title="Bhajans & Kirtans"/>
        </section>
      </main>
    </>
  );
};

export default Audio;

export const query = graphql`
  {
    yearly: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/yearly/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    festivals: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/festivals/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    various: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/various/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    srimad: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/srimad-bhagavatam/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    chaitanya: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/chaitanya-caritamrta/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    bhagavad: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/chaitanya-caritamrta/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    kirtans: allCloudinaryMedia(
      filter: {resource_type: {eq: "video"}, public_id: {regex: "Audio/bhajans-and-kirtans/"}}
      sort: {order: DESC, fields: public_id}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
  }
`;
