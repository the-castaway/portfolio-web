import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionExit = ({ node }) => {
    //refs
    // const homeCards = node.querySelectorAll('.home-card-container');
    // const homeFooter = node.querySelectorAll('.home-info-container ');
    // console.log(homeCards);

    // const ctx = gsap.context((context) => {
    //     const tl = gsap.timeline();
    //     tl.to(homeCards[0], {
    //         duration: 1,
    //         delay: 0.6,
    //         ease: 'power3.in',
    //         rotate: '30deg',
    //         rotationY: 0,
    //         rotationX: 0,
    //         y: '100vw',
    //     }, 0)
    //     tl.to(homeCards[1], {
    //         duration: 1,
    //         delay: 0.4,
    //         ease: 'power3.in',
    //         rotate: '-30deg',
    //         rotationY: 0,
    //         rotationX: 0,
    //         y: '100vw',

    //     }, 0)
    //     tl.to(homeCards[2], {
    //         duration: 1,
    //         delay: 0.2,
    //         ease: 'power3.in',
    //         rotate: '30deg',
    //         rotationY: 0,
    //         rotationX: 0,
    //         y: '100vw',

    //     }, 0)
    //     tl.to(homeCards[3], {
    //         duration: 1,
    //         delay: 0,
    //         ease: 'power3.in',
    //         rotate: '-30deg',
    //         rotationY: 0,
    //         rotationX: 0,
    //         y: '100vw',
    //     }, 0)
    //     tl.to(homeFooter, {
    //         duration: 1,
    //         y: '100%',
    //         opacity: 0,
    //         ease: "power3.in",
    //     }, 0);
    // })
}

export { HomeTransitionExit };