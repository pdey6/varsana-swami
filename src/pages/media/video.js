import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Video = () => {
  return (
    <Wrapper>
      <div className="inner-mw mobile-pd">
        <h2 className="page-title">Videos</h2>
        <section className="page-content">
          <div className="inner-mw mobile-pd">
            <a href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA" target="_blank" rel="noopener noreferrer" className="yt">
            <StaticImage
              src="../../assets/images/yt.jpg"
              alt="about"
              className="image"
            />
            </a>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Video;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
 
  .yt {
    display: block;
    padding-bottom: 3rem;
  }


`;
