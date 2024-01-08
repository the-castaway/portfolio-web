import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionEnter = ({ node }) => {
    // gsap.registerPlugin(SplitText);
    // const marquee = node.querySelectorAll('.home-marquee');
    // const tl = gsap.timeline(),
    //     marqueeSplitText = new SplitText(marquee, { type: "words" }),
    //     marqueeWords = marqueeSplitText.words; //an array of all the divs that wrap each character

    // tl.from(marqueeWords, {
    //     duration: 0.4,
    //     opacity: 0,
    //     y: 20,
    //     ease: "ease",
    //     stagger: 0.1
    // });
}

const HomeTransitionExit = ({ node }) => {
    //refs
    const homeMarquee = node.querySelectorAll('.home-marquee');
    const homeCards = node.querySelectorAll('.home-card');
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

    tl.to(homeCards[0], {
        duration: 1,
        scale: 1.5,
        ease: "power1.out",
    }, 0);

}

const HomeTransitionEntered = ({ node }) => {

}

export { HomeTransitionEnter, HomeTransitionEntered, HomeTransitionExit };