import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//transitionContext
import TransitionContext from '../../context/transitionContext';
//components
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
//styles
import '../../styles/home.css';
import '../../styles/about.css';
//assets
import { AboutMedia } from "../../media/media";

const About = () => {
  //refs
  const about = useRef(HTMLElement);
  const aboutHeadshotContainer = useRef(HTMLElement);
  const aboutHeadshot = useRef(HTMLElement);

  //scroll animation timeline
  const getScrollTL = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        markers: false,
        pin: false, // pin the trigger element while active
        start: '30% 10%',
        end: "30% 10%",
        scrub: false,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      }
    });
    tl.to(aboutHeadshot.current, {
      top: "80",
      width: '66.6%',
      duration: 0.8,
      ease: "ease",
    }, 0)
    return tl;
  }

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //intro 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      getScrollTL();
      // getIntroTL();
    })
    return () => {
      ctx.revert();
    };
  }, [])

  return (
    <div ref={about} className='about'>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-column-left' />
          <div className='about-column-center'>
            <div className='about-intro'>
              <h1 className='about-intro-header'>
                About
              </h1>
              <p className='about-intro-description'>
                Hands-on. Thoughtful. Story-led. I believe in creating beautiful and meaningful experiences that evoke human emotion, serve a greater purpose, and lead to positive action toward our fellow humans and planet.
              </p>
              <div className='about-intro-info'>
                <div className="about-intro-info-currently">
                  <h4>
                    Currently
                  </h4>
                  <p>
                    Designer / Engineer @ Meta
                  </p>
                </div>
                <div className="about-intro-info-status">
                  <h4>
                    Status
                  </h4>
                  <div className='about-intro-info-node-status'>
                    <div className='about-intro-info-node-icon' />
                    <p>
                      Available
                    </p>
                  </div>
                </div>
              </div>
              <div className='about-intro-abilities'>
                <h4>
                  Currently
                </h4>
                <ul>
                  <li>
                    <p>
                      Creative Direction
                    </p>
                  </li>
                  <li>
                    <p>
                      Concept Development
                    </p>
                  </li>
                  <li>
                    <p>
                      UI Design
                    </p>
                  </li>
                  <li>
                    <p>
                      UX
                    </p>
                  </li>
                  <li>
                    <p>
                      Prototyping
                    </p>
                  </li>
                  <li>
                    <p>
                      Front-end Engineering
                    </p>
                  </li>
                  <li>
                    <p>
                      Web development
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-experience">
              <h2 className='about-experience-header'>
                Experience
              </h2>
              <div className='about-experiece-node'>
                <h3>
                  Design and Engineering Lead for Web @Meta
                </h3>
                <h4>
                  March 2019 - Present
                </h4>
                <ul className='about-experience-node-list'>
                  <li>
                    <p>
                      Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                    </p>
                  </li>
                  <li>
                    <p>
                      Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
                    </p>
                  </li>
                </ul>
              </div>
              <div className='about-experiece-node'>
                <h3>
                  Design and Development Lead @Colorful Notion
                </h3>
                <h4>
                  July 2017 - January 2019
                </h4>
                <ul className='about-experience-node-list'>
                  <li>
                    <p>
                      Crafted captivating user experiences for Colorful Notion's mobile app initiatives, ensuring optimal user engagement.
                    </p>
                  </li>
                  <li>
                    <p>
                      Leveraged user data insights to iterate and refine designs, resulting in continuous improvement and increased user acquisition.
                    </p>
                  </li>
                </ul>
              </div>
              <div className='about-experiece-node'>
                <h3>
                  Design and Development Lead @Wolk
                </h3>
                <h4>
                  July 2017 - January 2019
                </h4>
                <ul className='about-experience-node-list'>
                  <li>
                    <p>
                      Spearheaded Wolk's digital branding efforts, ensuring a cohesive and impactful brand presence across all digital channels.
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed and developed Wolk's desktop app, leveraging Electron and React to create a robust and user-friendly application.
                    </p>
                  </li>
                </ul>
              </div>
              <div className='about-experiece-node'>
                <h3>
                  Designer and Developer @Crosschannel
                </h3>
                <h4>
                  July 2016 - July 2017
                </h4>
                <ul className='about-experience-node-list'>
                  <li>
                    <p>
                      Created interactive mobile ads that aligned with partners' business objectives, driving engagement and achieving desired results.
                    </p>
                  </li>
                  <li>
                    <p>
                      Drove growth and revenue by designing and optimizing content for various marketing campaigns, with a strong focus on improving metrics.
                    </p>
                  </li>
                </ul>
              </div>
              <div className='about-experiece-node'>
                <h3>
                  Designer @Artsigns
                </h3>
                <h4>
                  June 2015 - July 2016
                </h4>
                <ul className='about-experience-node-list'>
                  <li>
                    <p>
                      Crafted captivating spatial experiences for clients, effectively capturing and portraying their unique brand identities.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated closely with clients to generate initial concept art for a wide range of exterior branding requests, including monuments and wall graphics.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-education">
              <h2 className='about-education-header'>
                Education
              </h2>
              <div className='about-education-node'>
                <h3>
                  Continued Studies @Stanford University
                </h3>
                <h4>
                  August 2016 - May 2017
                </h4>
                <ul className='about-education-node-list'>
                  <li>
                    <p>
                      Web Design / Development Courses
                    </p>
                  </li>
                </ul>
              </div>
              <div className='about-education-node'>
                <h3>
                  Design Studies @San Jose State University
                </h3>
                <h4>
                  August 2010 - May 2015
                </h4>
                <ul className='about-education-node-list'>
                  <li>
                    <p>
                      Graphic Design Concentration
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='about-column-right'>
            <div ref={aboutHeadshotContainer} className='about-headshot-container'>
              <div ref={aboutHeadshot} className='about-headshot'>
                <img className='about-headshot-media' key={AboutMedia[0].key} src={AboutMedia[0].src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer instruction={"Scroll Down"} scroll={true} />
    </div>
  );
}

export default About;