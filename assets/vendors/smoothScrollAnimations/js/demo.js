/**
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
{
    // helper functions
    const MathUtils = {
        // map number x from range [a, b] to [c, d]
        map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b
    };

    // body element
    const body = document.body;

    // calculate the viewport size
    let winsize;
    const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
    calcWinsize();
    // and recalculate on resize
    window.addEventListener('resize', function () {
        location.reload();
    });

    // scroll position and update function
    let docScroll;
    const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', getPageYScroll);

    // Item


    // SmoothScroll
    class SmoothScroll {
        constructor() {
            // the <main> element
            window.addEventListener("load", () => {
                this.DOM = { main: document.querySelector('.main-wrapper') };
                // the scrollable element
                // we translate this element when scrolling (y-axis)
                this.DOM.scrollable = this.DOM.main.querySelector('.data-scroll');
                // the items on the page
                this.items = [];
                // here we define which property will change as we scroll the page
                // in this case we will be translating on the y-axis
                // we interpolate between the previous and current value to achieve the smooth scrolling effect
                this.renderedStyles = {
                    translationY: {
                        // interpolated value
                        previous: 0,
                        // current value
                        current: 0,
                        // amount to interpolate
                        ease: 0.06,
                        // current value setter
                        // in this case the value of the translation will be the same like the document scroll
                        setValue: () => docScroll
                    }
                };
                // set the body's height
                this.setSize();
                // set the initial values
                this.update();
                // the <main> element's style needs to be modified
                this.style();
                // init/bind events
                // start the render loop
                requestAnimationFrame(() => this.render());
            });

        }
        update() {
            // sets the initial value (no interpolation) - translate the scroll value
            for (const key in this.renderedStyles) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }
            // translate the scrollable element
            this.layout();
        }
        layout() {
            // translates the scrollable element
            this.DOM.scrollable.style.transform = `translate3d(0,${-1 * this.renderedStyles.translationY.previous}px,0)`;
        }
        setSize() {

            const bodyElement = document.body;

            bodyElement.style.height = `${bodyElement.scrollHeight}px`;

        }


        style() {

            // the <main> needs to "stick" to the screen and not scroll
            // for that we set it to position fixed and overflow hidden 
            this.DOM.main.style.position = 'fixed';
            this.DOM.main.style.width = this.DOM.main.style.height = '100%';
            this.DOM.main.style.top = this.DOM.main.style.left = 0;
            this.DOM.main.style.overflow = 'hidden';
        }

        render() {
            // update the current and interpolated values
            for (const key in this.renderedStyles) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }
            // and translate the scrollable element
            this.layout();

            // for every item
            for (const item of this.items) {
                // if the item is inside the viewport call it's render function
                // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
                if (item.isVisible) {
                    item.render();
                }
            }

            // loop..
            requestAnimationFrame(() => this.render());
        }
    }



    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded({ background: true }, resolve);
        });
    };

    // And then..
    preloadImages().then(() => {
        // Get the scroll position
        getPageYScroll();
        // Initialize the Smooth Scrolling
        new SmoothScroll();
    });
    window.onload = () => {
        const smoothScroll = new SmoothScroll();
    };
}

















