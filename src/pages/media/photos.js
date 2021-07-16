import React from "react";
import { graphql } from "gatsby";
import Galleries from "../../components/Gallery";

const Photos = ({ data }) => {

  const summer = data.summer.nodes
  const fall = data.fall.nodes
  const rad = data.rad.nodes 
  const cleaning = data.cleaning.nodes
  const varsana = data.varsana.nodes
  const devi = data.devi.nodes
  
  return (
    <main className="page">
      <header className="page-header">
        <h2 className="page-title media-title green">Photo Albums</h2>
      </header>
      <section className="page-content">
        <Galleries gallery={summer} title="One Summer on Govardhan"/> 
        <Galleries gallery={fall} title="Fall on Govardhan"/> 
        <Galleries gallery={rad} title="Radhastami 2017"/> 
        <Galleries gallery={cleaning} title="Cleaning Syama Kunda"/> 
        <Galleries gallery={varsana} title="Varsana Maharaj and Jananivas Prabhu"/> 
        <Galleries gallery={devi} title="Vrinda-Devi and her birthday cake"/> 
      </section>
    </main>
  );
};

export default Photos;

export const query = graphql`
  {
    summer: allCloudinaryMedia(
      filter: {resource_type: {eq: "image"}, public_id: {regex: "Gallery/one-summer-on-govardhan/"}}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    fall: allCloudinaryMedia(
      filter: {resource_type: {eq: "image"}, public_id: {regex: "Gallery/fall-on-govardhan/"}}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    rad: allCloudinaryMedia(
      filter: {resource_type: {eq: "image"}, public_id: {regex: "Gallery/radhastami-2017/"}}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    cleaning: allCloudinaryMedia(
      filter: {resource_type: {eq: "image"}, public_id: {regex: "Gallery/cleaning-syama-kunda/"}}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    varsana: allCloudinaryMedia(
      filter: {resource_type: {eq: "image"}, public_id: {regex: "Gallery/varsana-maharaj/"}}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
    devi: allCloudinaryMedia(
      filter: {resource_type: {eq: "image"}, public_id: {regex: "Gallery/vrinda-devi/"}}
    ) {
      nodes {
        id
        public_id
        secure_url
      }
    }
  }
`;
