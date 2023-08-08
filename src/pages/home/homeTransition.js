import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionEnter = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const header = node.querySelectorAll('.header');
    const video = node.querySelectorAll('.home-video-container');
    const tl = gsap.timeline(),
        mySplitText = new SplitText(header, { type: "chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character

    tl.from(chars, {
        duration: 0.4,
        opacity: 0,
        y: 100,
        ease: "ease",
        stagger: 0.05
    });
    tl.from(video, {
        duration: 0.4,
        delay: -0.3,
        opacity: 0,
        y: 100,
        ease: "ease",
    });
}

const HomeTransitionExit = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const header = node.querySelectorAll('.header');
    const video = node.querySelectorAll('.home-video-container');

    console.log("home out" + video);
    const tl = gsap.timeline(),
        mySplitText = new SplitText(header, { type: "chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character

    tl.to(chars, {
        duration: 0.4,
        opacity: 0,
        y: -100,
        ease: "ease",
        stagger: 0.05
    });
    tl.to(video, {
        duration: 0.4,
        delay: -0.3,
        opacity: 0,
        y: -100,
        ease: "ease",
    });
}

export { HomeTransitionEnter, HomeTransitionExit };