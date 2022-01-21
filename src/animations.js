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


    fadeIn(){
        const anim = this.element.animate(
            keyframes.fadeIn,{

            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            fill: 'forwards'
        })

        anim.onfinish = () => {
            this.show() // ahow after animation completion
        }
    }

    fadeOut(){
        const anim = this.element.animate(
            keyframes.fadeOut,{ 
            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            fill: 'forwards'
        })

        anim.onfinish = () => {
            this.hide() // hide after animation completion
        }
    }

    fadeDown(){
        const anim = this.element.animate(
        keyframes.fadeDown,{
        
            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            fill: 'forwards'
        
        })

        anim.onfinish = () => {
            this.show() // ahow after animation completion
        }
    }

    fadeLeft(){
        const anim = this.element.animate(
        keyframes.fadeLeft,{
        
            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            fill: 'forwards'
        
        })

        anim.onfinish = () => {
            this.show() // ahow after animation completion
        }
    }

    fadeRight(){  
        this.hideScrollBarX()
        const anim = this.element.animate( 
        keyframes.fadeRight,{
        
            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            fill: 'forwards'
        })

        anim.onfinish = () => {
            this.show() // ahow after animation completion
            this.hideScrollBarX()
        }
    }

    fadeUp(){
        const anim = this.element.animate( 
        keyframes.fadeUp,{
        
            duration: this.duration,
            easing: this.easing,
            delay: this.delay,
            fill: 'forwards'
        
        })

        anim.onfinish = () => {
            this.show() // ahow after animation completion
        }
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
        })
    }
}

module.exports = Animation