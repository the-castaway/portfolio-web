import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionExit = ({ node }) => {
    //refs
    const homeMarquee = node.querySelectorAll('.home-marquee');
    const homeCards = node.querySelectorAll('.home-card-container');
    const homeFooter = node.querySelectorAll('.home-info-container ');
    //console.log(homeCards);
    gsap.registerPlugin(SplitText);
    const tl = gsap.timeline(),
        homeMarqueeSplitText = new SplitText(homeMarquee, { type: "words" }),
        homeMarqueeWords = homeMarqueeSplitText.words; //an array of all the divs that wrap each character

    tl.to(homeMarqueeWords, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        ease: "ease",
        stagger: 0.1
    }, 0);
    tl.to(homeCards[3], {
        duration: 2,
        scale: 1.5,
        x: '-75vw',
        y: '75vw',
        rotate: '-20deg',
        ease: "power3.in",
    }, 0);
    tl.to(homeCards[3], {
        duration: 1,
        delay: -1,
        opacity: 0,
        ease: "power3.in",
    }, ">");
    tl.to(homeCards[2], {
        duration: 2,
        delay: 0.5,
        scale: 1.5,
        x: '-75vw',
        y: '-75vw',
        rotate: '-20deg',
        ease: "power3.in",
    }, 0);
    tl.to(homeCards[2], {
        duration: 1,
        delay: -1,
        opacity: 0,
        ease: "power3.in",
    }, ">");
    tl.to(homeCards[1], {
        duration: 2,
        delay: 1,
        scale: 1.5,
        x: '75vw',
        y: '-75vw',
        rotate: '20deg',
        ease: "power3.in",
    }, 0);
    tl.to(homeCards[1], {
        duration: 1,
        delay: -1,
        opacity: 0,
        ease: "power3.in",
    }, ">");
    tl.to(homeCards[0], {
        duration: 2,
        delay: 1.5,
        scale: 1.5,
        x: '75vw',
        y: '75vw',
        rotate: '20deg',
        ease: "power3.in",
    }, 0);
    tl.to(homeCards[0], {
        duration: 1,
        delay: -1,
        opacity: 0,
        ease: "power3.in",
    }, ">");
    tl.to(homeFooter, {
        duration: 1,
        y: '100%',
        opacity: 0,
        ease: "power3.in",
    }, 0);
}

export { HomeTransitionExit };