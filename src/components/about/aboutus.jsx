import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../style/about/about.css';
import '../../style/about/about-4.css';
import { Footer } from '../footer';
import ceo1 from '../../assets/image/about/CEO1.png';
import ceo2 from '../../assets/image/about/CEO2.jpg';
import ceo3 from '../../assets/image/about/CEO3.jpeg';
import divi from '../../assets/image/about/division.png';
import { FAQ } from '../faq';
// import { Fplus } from '../components/faq'

export const AboutUs = () => {
  useEffect(() => {
    const topoffset = document.getElementById('team-head');
    let agPosY;

    const agTimelineLineProgress = $('.js-timeline_line-progress');
    const agTimelinePoint = $('.js-timeline-card_point-box');
    const agTimelineItem = $('.js-timeline_item');
    const agOuterHeight = $(window).outerHeight();
    let agHeight = $(window).height();
    let agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();
      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();
      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;
      fnUpdateProgress();
    }

    function fnUpdateProgress() {
      const agTop = topoffset.offsetTop + 0;
      const i = agTop + agPosY - $(window).scrollTop();
      const a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      let n = agPosY - a + agOuterHeight / 2;
      if (i <= agPosY + agOuterHeight / 2) {
        n = i - a;
      }
      agTimelineLineProgress.css({ height: n + 'px' });

      agTimelineItem.each(function () {
        const agTop = $(this).find(agTimelinePoint).offset().top;
        if (agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight) {
          $(this).addClass('js-ag-active');
        } else {
          $(this).removeClass('js-ag-active');
        }
      });
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }

    $(window).on('scroll', fnOnScroll);
    $(window).on('resize', fnOnResize);

    return () => {
      $(window).off('scroll', fnOnScroll);
      $(window).off('resize', fnOnResize);
    };
  }, []);

  return (
    <section className="about">
      <div className="head-title">
        <h1>About Us</h1>
      </div>

      <div className="js-timeline ag-timeline">
        <div className="js-timeline_line ag-timeline_line">
          <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
        </div>

        {/* WHO WE ARE section */}
        <div className="timeline">
          <div className="checkpoint check1">
            <div>
              <h2>Who we are?</h2>
              <p>
                At To-Let, we are more than just property managers – we are
                dedicated partners in your property management journey.
                Established with a commitment to redefining the standards of
                property management, To-Let brings a wealth of expertise to the
                dynamic property management landscape.
              </p>
            </div>
          </div>

          {/* OUR JOURNEY section */}
          <div className="checkpoint check2">
            <div>
              <h2>Our Journey</h2>
              <p>
                Since our inception, we have been at the forefront of delivering
                exceptional property management solutions. With a foundation
                built on integrity, transparency, and client-centric values,
                To-Let has steadily grown to become a trusted name in the
                industry.
              </p>
            </div>
          </div>

          {/* MISSION AND VISION section */}
          <div className="checkpoint check3">
            <div>
              <h2>Mission and Vision</h2>
              <p>
                Our mission is to simplify and elevate the property management
                experience for property owners and tenants alike. We envision a
                future where seamless, efficient, and client-focused property
                management is the norm.
              </p>
            </div>
          </div>

          {/* SERVICES WE OFFER section */}
          <div className="checkpoint check4">
            <div>
              <h2>Services we offer</h2>
              <p>
                To-Let specializes in a comprehensive suite of property
                management services, including property leasing, tenant
                screening, rent collection, property maintenance, and the
                provision of PGs (Pay Guest) and flats for rent. Our tailored
                solutions cater to the unique needs of each property under our
                care.
              </p>
            </div>
          </div>

          {/* CLIENT-CENTRIC APPROACH section */}
          <div className="checkpoint check5">
            <div>
              <h2>Client-Centric Approach</h2>
              <p>
                What sets To-Let apart is our unwavering dedication to client
                satisfaction. We prioritize open communication, timely
                responses, and a proactive approach to address the diverse needs
                of property owners and tenants.
              </p>
            </div>
          </div>

          {/* EXPERT TEAM section */}
          <div className="checkpoint check6">
            <div>
              <h2>Expert Team</h2>
              <p>
                Our team consists of seasoned professionals with in-depth
                knowledge of the property management industry. From property
                managers to maintenance experts, each member of the To-Let team
                is committed to ensuring the optimal performance and value
                of your property.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div id="team-head" className="mb-2">Our team</div>
        <div><img className="imagd" src={divi} alt="division" /></div>

        {/* Transitions applied on the images in our team section */}
        <div className="team-images">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  className="imagew"
                  src={ceo1}
                  alt="Founder"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div className="flip-box-back">
                <a href="https://www.linkedin.com/in/mayur-kukreja-280b71b4/">
                  <h2>Mayur Kukreja</h2>
                  <p>CEO & Founder</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  className="imagew"
                  src={ceo3}
                  alt="Co-founder"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div className="flip-box-back">
                <a href="https://www.linkedin.com/in/emanshu-wadhwani-258678176/">
                  <h2>Emanshu Wadhwani</h2>
                  <p>Co-founder</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src={ceo2}
                  alt="Developer"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div className="flip-box-back">
                <a href="https://www.linkedin.com/in/rohit-kanaujia-b775a5171/">
                  <h2>Rohit Kanaujia</h2>
                  <p>Co-founder</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uncomment the following line if the Fplus component is needed */}
      {/* <Fplus /> */}
      <FAQ />
      <Footer />
    </section>
  );
};
