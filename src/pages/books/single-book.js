import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Quote from "../../components/Quote";

const Books = () => {
  return (
    <main className="page">
      <header className="page-header">
        <StaticImage
          src="../../assets/images/books-photo.jpg"
          alt=""
          className="single-book-header-img"
        />
        <div className="quotes">
          <Quote
            color="yellow"
            quote="It is truly a monumental presentation of deep devotion to Sri Dhama"
            author="Candramauli Swami"
          />

          <Quote
            color="green"
            quote="Through his eyes and heart, Varsana Swami reveals the hidden treasures of the Dhama."
            author="Malati Devi Dasi"
          />

          <Quote
            color="pink"
            quote="The photo book fills our heart with joy and attraction for Sri Sri Radha and Krishna and Their enchanting abode.."
            author="Sacinandana Swami"
          />
        </div>
      </header>

      <section className="page-content">
        <article>
          <StaticImage
            src="../../assets/images/cover1.jpg"
            alt=""
            className="single-book-img"
          />
          <p>
            Nestled in the wooded hilltops of the Appalachian Foothills, New
            Vrindaban is a favorite destination for thousands of pilgrims every
            year. Many of us have heard of or visited New Vrindaban and can
            attest to the wonderment of the place. Maharaja’s photo book is an
            invitation to realize and enter its deeper, magical dimensions of
            Sri Dhama. It offers a tangible glimpse of this enchanted realm, not
            easily seen with the naked eye.
          </p>

          <p>
            Imbibing Srila Prabhupada’s instructions, His Holiness Varsana Swami
            has been carving out landscapes throughout New Vrindaban since 1972.
            His heart is vested in revealing and sharing the Dhama’s glory,
            message and beauty.{" "}
          </p>
        </article>
        <article>
          <StaticImage
            src="../../assets/images/cover2.jpg"
            alt=""
            className="single-book-img"
          />
          <p>
            The book is a generous offering of Maharaja’s vast knowledge and
            deep spiritual insights on the subject of dhama-tattva. It contains
            over 150 beautiful images, which are intertwined with texts, a blend
            of his writings, quotations by Srila Prabhupada and other acharyas.
            Its purpose is to enhance our appreciation of the Dhama, deepen our
            understanding of its theological importance and foster developing
            personal relationship with Her.{" "}
          </p>
        </article>
        <article>
          <StaticImage
            src="../../assets/images/cover3.jpg"
            alt=""
            className="single-book-img"
          />

          <p>
            It is comprised of five parts: ‘Let us glorify Vrindavan’,
            ‘Perceiving Sri Dhama’, ‘Who is Sri Dhama?’, ‘Tirthas in New
            Vrindaban’ and ‘Sri Nama and Sri Dhama’ . They do not need to be
            read in order; you can just open the book to any page and relish its
            content.{" "}
          </p>
          <p>
            In Part 1, we hear the glories of Vrindavana-dhama, which awaken our
            astonishment and gratitude thus inducing the thought, “what an
            extraordinary opportunity we are being offered; we can go back to
            this amazing place of sweetness, beauty and love!” Part 2 makes us
            aware that it requires devotional qualifications and a significant
            amount of grace and to enter deeply into that sacred realm.{" "}
          </p>
        </article>
        <article>
          <StaticImage
            src="../../assets/images/cover4.jpg"
            alt=""
            className="single-book-img"
          />
          <p>
            If you wonder why Maharaj refers to Dhama as “Her”, read Part 3,
            where he unveils the topic of the intriguing personality of Sri
            Dhama. Part 4 you might see as an invitation to seek deeper
            connection and blessings of the significant tirthas manifested so
            far in New Vrindaban. How intrinsically related is the Dhama and the
            Nama and how one enriches the other is the topic of the final
            section of the book.{" "}
          </p>
        </article>
        <article>
          <StaticImage
            src="../../assets/images/cover5.jpg"
            alt=""
            className="single-book-img"
          />
          <p>
            In his concluding piece Maharaja writes, “May the experience and
            blessings of the Dhama increasingly direct our path according to the
            song of Krishna’s flute, the movements of His dance, the flow of His
            grace, and the impressions of the lotus feet of His devotees. May
            the beauty, wonder, mercy, and message of Sri Dhama expand and
            blossom within our hearts”.
          </p>
        </article>

        <article className="quote-container green">
          <blockquote className="quote">
            <p>
              “ Devotion to Sri Krishna is beautiful and when seen and described
              through the eyes and heart of Vrndavan-Bihari’s pure devotee its
              beauty expands unlimitedly.
            </p>

            <p>
              Sri Varsana Maharaja takes us into his realm of devotion helping
              us to visualize the unlimited beauty and hidden secrets of
              Krishna’s Holy Dhama, which manifested itself in the Western world
              as New Vrindaban.
            </p>

            <p>
              Let this Dhamvasi take you to the heart of Sri Dhama with his
              unveiling presentation of deep devotion to Sri Sri Radha Vrindaban
              Chandra. ”
            </p>
          </blockquote>
          <p className="author">- Candramauli Swami </p>
        </article>
      </section>
    </main>
  );
};

export default Books;