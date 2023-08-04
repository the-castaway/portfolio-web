import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const ShowcaseTransitionEnter = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const header = node.querySelectorAll('.header');
    const tl = gsap.timeline(),
        mySplitText = new SplitText(header, { type: "chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character

    tl.from(chars, {
        duration: 0.8,
        opacity: 0,
        y: 200,
        rotationX: 0,
        ease: "ease",
        stagger: 0.1
    });
}

const ShowcaseTransitionExit = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const header = node.querySelectorAll('.header');
    const tl = gsap.timeline(),
        mySplitText = new SplitText(header, { type: "chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character

    tl.to(chars, {
        duration: 0.8,
        opacity: 0,
        y: -200,
        rotationX: 0,
        ease: "ease",
        stagger: 0.1
    });
}

export { ShowcaseTransitionEnter, ShowcaseTransitionExit };