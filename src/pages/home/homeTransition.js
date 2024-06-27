import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const HomeTransitionExit = ({ node }) => {
    //refs
    const homeCards = node.querySelectorAll('.home-card-container');
    const homeFooter = node.querySelectorAll('.home-info-container ');
    console.log(homeCards[1].children[0]);

    // const ctx = gsap.context((context) => {
    //     const tl = gsap.timeline();
    //     tl.to(homeCards[0].children[0], {
    //         duration: 1,
    //         delay: 0.6,
    //         ease: 'power3.in',
    //         rotationY: 0,
    //         rotationX: 0,
    //         rotationZ: 0,
    //         y: 0,
    //         x: 0,
    //     }, 0)
    //     tl.to(homeCards[1].children[0], {
    //         duration: 1,
    //         delay: 0.4,
    //         ease: 'power3.in',
    //         rotationY: 0,
    //         rotationX: 0,
    //         rotationZ: 0,
    //         y: 0,
    //         x: 0,

    //     }, 0)
    //     tl.to(homeCards[2].children[0], {
    //         duration: 1,
    //         delay: 0.2,
    //         ease: 'power3.in',
    //         rotationY: 0,
    //         rotationX: 0,
    //         rotationZ: 0,
    //         y: 0,
    //         x: 0,

    //     }, 0)
    //     tl.to(homeCards[3].children[0], {
    //         duration: 1,
    //         delay: 0,
    //         ease: 'power3.in',
    //         rotationY: 0,
    //         rotationX: 0,
    //         rotationZ: 0,
    //         y: 0,
    //         x: 0,
    //     }, 0)
    // })
}

export { HomeTransitionExit };