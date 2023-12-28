import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionEnter = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const marquee = node.querySelectorAll('.home-marquee');
    const tl = gsap.timeline(),
        marqueeSplitText = new SplitText(marquee, { type: "words" }),
        marqueeWords = marqueeSplitText.words; //an array of all the divs that wrap each character

    tl.from(marqueeWords, {
        duration: 0.4,
        opacity: 0,
        y: 20,
        ease: "ease",
        stagger: 0.1
    });
}

const HomeTransitionExit = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const marquee = node.querySelectorAll('.home-marquee');
    const tl = gsap.timeline(),
        marqueeSplitText = new SplitText(marquee, { type: "words" }),
        marqueeWords = marqueeSplitText.words; //an array of all the divs that wrap each character

    tl.to(marqueeWords, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        ease: "ease",
        stagger: 0.1
    }, 0);
}

const HomeTransitionEntered = ({ node }) => {
    const marquee = node.querySelectorAll('.home-marquee');
    const tl = gsap.timeline();

    console.log('entered');

    tl.to(marquee, {
        duration: 30,
        x: '100%',
        ease: "power1.in",
        repeat: -1,

    });
}

export { HomeTransitionEnter, HomeTransitionEntered, HomeTransitionExit };