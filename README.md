# scrolls.js
## _A fast and easy scroll animation library_

scrolls.js is a fast any easy way to add scroll animations in your website.
Just add scrolls to your HTML tags and your ready to go!!

- Fast and small (~2.5KB minified size)
- Easy to use

## Features
- Add scrolls attribute to the tag you wish to observe while scrolling
- 6 different animations
- Easy to use
- Fast and small
- Uses IntersectionObserver to observe and animate() method to apply animations

## How to use
Just add scrolls attribute to the tag as shown below

```sh
<div scrolls> ... </div>
```
And your div tag starts animating on scroll.

## Other attributes

| attribute |  | Values |
| ------ | ------ | ------ |
| scrolls-anim | Decides animation to play on the element. | 'fade-in'(default) 'fade-out', 'fade-right', 'fade-left', 'fade-up', 'fade-down' |
| scrolls-duration | Decides animation duration in ms | ex 1000, default to 600 |
| scrolls-easing | Decides easing of the animation | 'ease-in', 'ease-out', 'ease-in-out'(default) |
| scrolls-delay | Decides delay to the animation in ms | ex 500, defaults to 0 |