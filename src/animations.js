const keyframes = require('./keyframes')

class Animation{
    constructor(ele){
        this.element = ele.target
        this.element.style.opacity = 0 // hide elements initially
        this.getAttributes()
    }

    getAttributes(){
        this.duration = parseInt(this.element.getAttribute('scrolls-duration')) || 600 
        this.easing = this.element.getAttribute('scrolls-easing') || 'ease-in-out'
        this.iteration = 1 // won't change this
        this.delay = parseInt(this.element.getAttribute('scrolls-delay')) || 0
    }

    play(animationName, isIntersecting){
        this.hideScrollBarX()

        const animationFrames = keyframes.filter(o => o.animationFor === animationName && o.isEntryAnimation === isIntersecting)
        
        const anim = this.element.animate(
            animationFrames[0].frames,
            {
                duration: this.duration,
                easing: this.easing,
                delay: this.delay,
                fill: 'forwards'

            }
        )

        anim.onfinish = () => {
            this.hideScrollBarX()
            this.show()
        }

        this.hideScrollBarX()
    }

    hide(){
        this.element.style.opacity = 0;
    }

    show(){
        this.element.style.opacity = 1;
    }

    hideScrollBarX(){
        this.element.parentNode.animate([
            {overflowX: 'hidden'},
            {overflowX: 'hidden'}
        ],{
            duration: this.duration,
            fill: 'forwards'
        })

        this.element.parentNode.parentNode.animate([
            {overflowX: 'hidden'},
            {overflowX: 'hidden'}
        ],{
            duration: this.duration,
            fill: 'forwards'
        })
    }
}

module.exports = Animation