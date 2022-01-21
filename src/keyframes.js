const keyframes = {
    fadeIn: [
        {opacity: 0},
        {opacity: 1}
    ],

    fadeOut: [
        {opacity: 1},
        {opacity: 0}
    ],

    fadeDown: [
        {
            opacity: 0,
            transform: 'translate3d(0,-100%,0)'
        },
        {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        }
    ],

    fadeUp: [
        {
            opacity: 0,
            transform: 'translate3d(0,100%,0)'
        },
        {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        }
    ],

    fadeRight:[
        {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
        },
        {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'

        }
    ],

    fadeLeft: [
        {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
        },
        {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        }
    ]
}

module.exports = keyframes