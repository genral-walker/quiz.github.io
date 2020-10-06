
import gsap from 'gsap';
import { domElements as dom } from './base';



// MAKE timeline of animation on page laod.
let loadTl = gsap.timeline({
    delay: .3,
});

const directSide = () => {
    if (window.matchMedia('(max-width: 45em)').matches) {
        loadTl.to(dom.side, { duration: .6, y: '0%' })
    } else {
        loadTl.to(dom.side, { duration: .6, x: '0%' })
    }
};

const welcomeShow = (elem, delay = .2) => {
    loadTl.fromTo(elem, { y: '70%', opacity: 0 }, { duration: .3, y: '0%', opacity: 1, delay: delay })
};

const iconBounce = () => {
    if (window.matchMedia('(max-width: 45em)').matches) {
        loadTl.fromTo(dom.icon, { y: '-50%', opacity: 0 }, { duration: .7, y: '0%', opacity: 1, ease: 'bounce.out' })
    } else {
        loadTl.fromTo(dom.icon, { y: '-80%', opacity: 0 }, { duration: .7, y: '0%', opacity: 1, ease: 'bounce.out' })
    }
};

const animateBtn = (timeline, elemnt) => {
    timeline.fromTo(elemnt, { opacity: 0, scale: .7, repeat: 1 }, { opacity: 1, scale: 1, repeat: 1 })
};

///// loadTl complete timeline
export const animatePageOnLOad = () => {
    directSide()
    loadTl.to(dom.form, { duration: 1.5, x: '0%' }, '-.2')
    welcomeShow(dom.formUser)
    welcomeShow(dom.formWelcome)
    loadTl.fromTo(dom.formInputs, { duration: .7, x: '10%', opacity: 0 }, { duration: .7, x: '0%', opacity: 1 })
    animateBtn(loadTl, dom.formBtn)
    iconBounce()
};


