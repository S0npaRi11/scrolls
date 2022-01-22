const Animation  = require('./animations')

const elements = document.querySelectorAll('[scrolls]');

const options = {
    threshold: 0,
    rootMargin: '0px'
}

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {scrollObserverCallback(entry, entry.isIntersecting, entry.intersectionRatio)})
}, options)

// observe all eolements
elements.forEach(element => scrollObserver.observe(element))

// scroll observer callback
const scrollObserverCallback = (ele, isIntersecting) => {

    const elementAnimation = new Animation(ele)
    const elementAnimationName = ele.target.getAttribute('scrolls-anim') || 'fade-in'
    const elementExitAnimationName = ele.target.getAttribute('scrolls-exit') || 'fade-in'

    if(isIntersecting) elementAnimation.play(elementAnimationName, isIntersecting)
    else elementAnimation.play(elementExitAnimationName, isIntersecting)
}