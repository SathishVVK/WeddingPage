import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="background-img about-heading">
        <h1 className="about-heading"> ABOUT US</h1>
      </div>
      <div className="text-container">
        <p className="paragraph">
          We love weddings! We feel they are an adventure to be experienced and
          captured in the form of timeless memories. WeddingNama was born out of
          passion to document love stories by Ankita Asthana and Akash Agarwal,
          a couple themselves! The team’s passion and undying enthusiasm has
          helped WeddingNama carve a niche in the Indian wedding Industry. Our
          company specializes in both wedding photography and filming with an
          artistic & personal touch. With our in-house dynamic team of skilled
          photographers, cinematographers and editors, we strike a perfect
          balance between stunning contemporary portraiture and
          photojournalistic storytelling. WeddingNama was officially founded in
          2013. WeddingNama specialises in capturing the essence of luxury
          weddings in India and abroad. Behind WeddingNama stands a powerhouse
          team of passionate professionals who are dedicated to bringing your
          wedding vision to life. We have gained multiple years of experience by
          covering numerous weddings in India and abroad. We travel around the
          world and have done assignments in USA, Mexico, Paris, Turkey, Italy,
          Kenya, Scotland, India, Thailand, Middle East, Philippines, amongst
          others. We have won many national and international awards like
          Fearless Awards, Best of the Best Wedding award Junebug, Gold awards
          WPJA, ISPWP, Best Wedding photographer in Great Indian Wedding Awards
          (GIWA), WeddingSutra Awards, Best wedding photographer & best wedding
          filmmaker at WOW Asia Awards. We have been constantly published in
          online media & magazines like Vogue, Harpers Bazaar, NYTimes,
          Huffington Post and others.
        </p>
      </div>
      <div>
        <h3 className="meet-our-founders">MEET OUR FOUNDERS</h3>
      </div>
      <div className="founder-details-container">
        <div>
          <div>
            <img
              className="founder-img"
              alt="img"
              src="//images-pw.pixieset.com/elementfield/098876223/Ankita_Asthana_profile-2467d79e.jpg"
            />
            <h3>ANKITA ASTHANA</h3>
            <p className="founder-details">Founder, WeddingNama</p>
            <p className="founder-details">
              Awarded TOP 10 wedding photographers of the world in 2022 & 2023
              by world photojournalist association (WPJA). She has done her
              masters in photography from the reputed National Institute of
              Design (NID), Ahmedabad. She started WeddingNama school to share
              her learning’s with fellow photographers. She is an ambassador for
              various brands like Ilford, Profoto & Nikon. She is featured in
              the global campaign for Nikon Z8. She has a strong sense of
              composition while her shooting style follows just one approach –
              to KEEP IT REAL! In the middle of shoots, editor briefings and
              client meetings, this #BossLady wears multiple hats, all with that
              warm smile. She nourishes, she manages, she exhibits. It’s kind of
              a cool gig, the way she does what she does. We trust her instincts
              implicitly! <br />
              Email id: ankita.asthana@weddingnama.in
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="founder-img"
              alt="img"
              src="//images-pw.pixieset.com/elementfield/798876223/Akash_Agarwal_profile-1ef24ec6.jpg"
            />
            <h3>AKASH AGARWAL</h3>
            <p className="founder-details">Founder, WeddingNama</p>
            <p className="founder-details">
              A traveller. A Leader. A disciplinarian. A humanitarian. Akash's
              journey is a testament to his unwavering spirit and remarkable
              versatility. He completed his Masters in Business Administration
              (MBA) from XLRI, Jamshedpur. He worked in the finance sector for
              three years, before taking the leap to cinematography and
              co-founded WeddingNama, along with Ankita. With sharp business
              acumen, he is a thorough tech geek and has a creative eye and a
              solid understanding for channeling each story’s core emotion into
              arresting filmography. His visual dynamism has helped
              cinematography take a whole new meaning at WeddingNama. His
              leadership shines through in his ability to guide our team with a
              perfect blend of discipline and compassion, fostering an
              environment where creativity flourishes.
              <br />
              Email id:akash.agarwal@weddingnama.in
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="our-wn-family">OUR WN FAMILY & WN OFFICE</h3>
      </div>

      <Carousel
        interval={1000}
        className="carousel-slider__photo-container--cropped"
      >
        {/* Add more Carousel.Items for additional slides */}
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/Youtube-banner_final-2023_HR-7fdd19d7.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/DD2_1235-8f6dfd2c.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_12-scaled-new-63a8687b.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_14-scaled-new-5ab75065.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_01-new-7a80264d.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_07-scaled-new-30b5804d.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_06-new-9170c65d.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_08-new-461419ff.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_15-scaled-new-1f1d1392.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/DJI_0050-53c310a9.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_16-scaled-new-af211c41.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_04-new-db89a40c.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-slider__photo-container--cropped img">
          <img
            className="d-block w-100"
            src="//images-pw.pixieset.com/elementfield/004091223/001-About-Footer_13-new-fb721675.jpg"
            alt="imgslide"
            style={{ objectFit: "cover", height: "400px" }}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <h3 className="feature-title">AS FEATURED IN</h3>
      </div>
      <div className="vendor-link-container">
        <div className="p-3">
          <a
            className="vendor-link vendor-link:hover"
            href="https://www.weddingsutra.com/real-weddings/featured-weddings/priyanka-and-mishaal-udaipur/"
            target="blank"
          >
            WeddingSutra
          </a>
        </div>
        <div className="p-3">
          <a
            className="vendor-link vendor-link:hover"
            href="https://www.vogue.com/article/masoom-minawala-miss-style-fiesta-shailin-mehta-mumbai-india-wedding"
            target="blank"
          >
            Vogue
          </a>
        </div>
        <div className="p-3">
          <a
            className="vendor-link vendor-link:hover"
            href="https://yourstory.com/2020/08/couples-mumbai-startup-weddingnama-photography"
            target="blank"
          >
            Your Story
          </a>
        </div>
        <div className="p-3">
          <a
            className="vendor-link vendor-link:hover"
            href="https://www.hindustantimes.com/entertainment/bollywood/sagarika-ghatge-celebrates-5th-wedding-anniversary-with-zaheer-khan-101669201822248.html"
            target="blank"
          >
            Hindustan Times
          </a>
        </div>
        <div className="p-3">
          <a className="vendor-link vendor-link:hover" href="/" target="blank">
            Harpers Bazaar
          </a>
        </div>
        <div className="p-3">
          <a
            className="vendor-link vendor-link:hover"
            href="https://www.wedmegood.com/real_wedding/detail/krishma-and-dhiraj-phuket-cross-culture-wedding-3361"
            target="blank"
          >
            WedMeGood
          </a>
        </div>
        <div className="p-3">
          <a
            className="vendor-link vendor-link:hover"
            href="https://www.wpja.com/wedding-photojournalism/mumbai-wedding-photographers/ankita-asthana#award-badges-tab"
            target="blank"
          >
            WPJA
          </a>
        </div>
      </div>
      <div>
        <div
          className="block-container block-photo-grid page-block ca-background-zgljjB"
          id="block-container-Dp5xjL"
        >
          <div className="block-container__block">
            <div
              className="element-container clearfix element-photo-grid"
              id="element-container-4bm0bV"
            >
              <div className="element-container">
                <img
                  className="element-container"
                  src="//images-pw.pixieset.com/elementfield/784869223/our-story-bf7af3cd.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-row">
                <div className="couple-img">
                  {" "}
                  <img
                    src="//images-pw.pixieset.com/elementfield/944086913/WN_KD_R1_026_1-new-7109182d.jpg"
                    className="d-block w-100 couple-img"
                    alt="..."
                  />
                </div>
                <div>
                  {" "}
                  <p className="love-notes">LOVE NOTES</p>
                  <h3 className="couple-names">Shweta &amp; Arjun</h3>
                  <p className="paragraph">
                    “When it comes to capturing your most cherished moments for
                    posterity, no one does it better than WeddingNama. Their
                    photographs are alive with vibrancy and we still don’t know
                    how they captured every minute detail of our wedding with
                    such love and compassion. But the quality that makes
                    WeddingNama stand apart is that both Ankita and Akash are
                    beautiful people, who above everything else, are simply
                    happy to be a part of all the festivities. And a smile
                    behind the camera evokes many in front of it!”
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="//images-pw.pixieset.com/elementfield/944086913/WN_KD_R1_026_1-new-7109182d.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div>
                  <h1>Your text comes here</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="//images-pw.pixieset.com/elementfield/944086913/WN_KD_R1_026_1-new-7109182d.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div>
                  <h1>Your text comes here</h1>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
