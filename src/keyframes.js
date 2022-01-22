const keyframes = [
    {
        animationFor: 'fade-in', // fadeInEntry
        isEntryAnimation: true,
        frames: [
            {opacity: 0},
            {opacity: 1}
        ]
    },

    {
        animationFor: 'fade-in', // fadeOutExit
        isEntryAnimation: false, 
        frames: [
            {opacity: 1},
            {opacity: 0}
        ]
    },

    {
        animationFor: 'fade-down', // fadeDownEntry
        isEntryAnimation: true,
        frames: [
            {
                opacity: 0,
                transform: 'translate3d(0,-100%,0)'
            },
            {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            }
        ]
    },

    {
        animationFor: 'fade-down', // fadeDownExit
        isEntryAnimation: false,
        frames: [
            {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            },
            {
                opacity: 0,
                transform: 'translate3d(0,-100%,0)'
            }
        ]
    },

    {
        animationFor: 'fade-up', // fadeUpEntry
        isEntryAnimation: true,
        frames:[
            {
                opacity: 0,
                transform: 'translate3d(0,100%,0)'
            },
            {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            }
        ]
    },

    {
        animationFor: 'fade-up', // fadeUpExit
        isEntryAnimation: false,
        frames:[
            {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            },
            {
                opacity: 0,
                transform: 'translate3d(0,100%,0)'
            }
        ]
    },

    {
        animationFor: 'fade-right', // fadeRightEntry
        isEntryAnimation: true,
        frames: [
            {
                opacity: 0,
                transform: 'translate3d(100%, 0, 0)'
            },
            {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)'

            }
        ]
    },

    {
        animationFor: 'fade-right', // fadeRightExit
        isEntryAnimation: false,
        frames: [
            {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)'
            },
            {
                opacity: 0,
                transform: 'translate3d(100%, 0, 0)'
            }
        ]
    },

    {
        animationFor: 'fade-left', // fadeLeftEntry
        isEntryAnimation: true,
        frames: [
            {
                opacity: 0,
                transform: 'translate3d(-100%, 0, 0)'
            },
            {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            }
        ]
    },

    {
        animationFor: 'fade-left', // fadeLeftExit
        isEntryAnimation: false,
        frames: [
            {
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            },
            {
                opacity: 0,
                transform: 'translate3d(-100%, 0, 0)'
            }
        ]
    }
]

module.exports = keyframes