import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ShowcaseTransitionExit = ({ node }) => {
    gsap.registerPlugin(SplitText);
    const header = node.querySelectorAll('.showcase-header');
    const tl = gsap.timeline(),
        mySplitText = new SplitText(header, { type: "chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character

    tl.to(chars, {
        duration: 0.4,
        opacity: 0,
        y: -100,
        rotationX: 0,
        ease: "ease",
        stagger: 0.05,
        // onComplete: () => {
        //     ScrollTrigger.getById("showcaseTrigger").kill();
        //     console.log('triggerkilled');
        // }
    });
}

export { ShowcaseTransitionExit };