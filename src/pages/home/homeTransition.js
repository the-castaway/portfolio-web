import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionExit = ({ node }) => {
    //refs
    const homeMarquee = node.querySelectorAll('.home-marquee');
    const homeCards = node.querySelectorAll('.home-card-container');
    const homeFooter = node.querySelectorAll('.home-info-container ');
    console.log(homeCards);
    gsap.registerPlugin(SplitText);

    const ctx = gsap.context((context) => {
        const tl = gsap.timeline();
        tl.to(homeMarquee, {
            duration: 0.5,
            opacity: 0,
            scale: 0.8,
            ease: "ease",
            stagger: 0.1
        }, 0);
        tl.to(homeCards[0], {
            duration: 1,
            delay: 0.6,
            ease: 'power3.in',
            rotate: '30deg',
            rotationY: 0,
            rotationX: 0,
            y: '100vw',
        }, 0)
        tl.to(homeCards[1], {
            duration: 1,
            delay: 0.4,
            ease: 'power3.in',
            rotate: '-30deg',
            rotationY: 0,
            rotationX: 0,
            y: '100vw',

        }, 0)
        tl.to(homeCards[2], {
            duration: 1,
            delay: 0.2,
            ease: 'power3.in',
            rotate: '30deg',
            rotationY: 0,
            rotationX: 0,
            y: '100vw',

        }, 0)
        tl.to(homeCards[3], {
            duration: 1,
            delay: 0,
            ease: 'power3.in',
            rotate: '-30deg',
            rotationY: 0,
            rotationX: 0,
            y: '100vw',
        }, 0)
        tl.to(homeFooter, {
            duration: 1,
            y: '100%',
            opacity: 0,
            ease: "power3.in",
        }, 0);
    })
}

export { HomeTransitionExit };