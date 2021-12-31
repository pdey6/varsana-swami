import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper className="page">
      <h2 className="page-title"> Varsana Swami </h2>
      <header className="page-header">
        <div className="inner-mw">
          <div className="page-hero">
            <figure>
              <StaticImage
                src="../assets/images/about-1.jpg"
                alt="about"
                className="image"
              />
            </figure>
            <article className="page-hero-info">
              <p>
                Varsana Maharaj is known for his deep understanding of the
                Gaudiya Vaishnava teachings, his enlivening presentations on
                Gaura Lila, Vrindavan pastimes, and Dhama-tattva.
              </p>
              <p>
                Led by the sensitivity of his heart, Maharaj has a unique
                lifelong connection with the Earth. His reverence is palpable as
                he takes special interest in the Dhama, sustainability and eco
                ethics.
              </p>
              <p>
                Maharaj effortlessly connects the magic of the natural world to
                Bhakti theology in a way that both illuminates scriptural
                understanding and awakens intuitive knowing to the listener.
              </p>
            </article>
          </div>
        </div>
      </header>

      <section className="page-content">
        <div className="inner-mw">
          <p>
            Varsana Swami was born in 1950 in Morristown, New Jersey. From
            childhood, he was deeply drawn to the workings of the natural world.
            He became a vegetarian of his own accord at the age of seven and was
            determined to lead a life of compassion. As a young man, his search
            for meaning manifested in studying theology in college, visiting
            ashrams, and hearing from different gurus.
          </p>

          <p>
            Finally, in 1972 he had the great fortune of meeting his beloved
            spiritual master, Srila Prabhupada. That encounter had such a
            profound impact on him that he was inspired to join the Brooklyn
            temple. Shortly thereafter he went to New Vrindaban and began what
            is now over four decades of devotional service.
          </p>

          <p>
            Maharaja has performed a variety of seva over the years that
            includes raising and training draft animals for farm work; pujari
            service; conservation work; and heading up the excavation
            department, which is responsible for literally carving out the
            infrastructure and holy places of New Vrindaban.
          </p>

          <p>
            Currently he is continuing his conservation work and is actively
            developing the lila-sthanas in New Vrindaban, focusing on the
            establishment of the Govardhan Parikrama. This is being done in
            conjunction with Dham Seva (a nonprofit organization dedicated to
            Srila Prabhupada’s desire that the holy places of Vraja appear in
            New Vrindaban). When not serving in New Vrindaban, Varsana Swami
            travels as an advocate and dedicated supporter of the farm movement
            within ISKCON. Varsana Swami is the author of the book Sri Gaura
            Lila and Appreciating New Vrindaban Dhama.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.main`
  @media screen and (min-width: 992px) {
    .page-hero {
      display: grid;
      grid-template-areas: "pg-figure pg-article pg-article";
      gap: 3rem;
    }

    .page-hero figure {
      grid-area: pg-figure;
    }

    .page-hero article {
      grid-area: pg-article;
    }

    /* .page-hero {
      padding-bottom: 2rem;
      border-bottom: 3px solid var(--clr-grey-10);
    } */

    .page-hero .image {
      display: block;
      margin-top: 0.5rem;
      height: 95%;
      width: 16rem;
      border-radius: 1rem;
    }
  }
`;
