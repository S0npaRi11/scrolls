const Animation  = require('./animations')

const elements = document.querySelectorAll('[scrolls]');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {scrollObserverCallback(entry, entry.isIntersecting)})
})

// observe all eolements
elements.forEach(element => scrollObserver.observe(element))

// scroll observer callback
const scrollObserverCallback = (ele, isIntersecting) => {

    const elementAnimation = new Animation(ele)
    const elementAnimationType = ele.target.getAttribute('scrolls-anim') || 'fade-in'

    // if(isIntersecting) elementAnimation.fadeRight()
    // else  elementAnimation.fadeOut()

    if(isIntersecting){
        switch (elementAnimationType) {
            case 'fade-in':
                elementAnimation.fadeIn()
                break;

            case 'fade-left':
                elementAnimation.fadeLeft()
                break;

            case 'fade-right':
                elementAnimation.fadeRight()
                break;

            case 'fade-up':
                elementAnimation.fadeUp()
                break;

            case 'fade-down':
                elementAnimation.fadeDown()
                break;
        
            default:
                break;
        }
    }else{
        elementAnimation.fadeOut()
    }
}