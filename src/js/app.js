// import { obj } from './test';

document.addEventListener('DOMContentLoaded', function () {

    //tutaj skrypty

    //MODAL 
    let figureFirst = document.getElementById("figure-1");
    let figureSecond = document.getElementById("figure-2");
    let modalFirst = document.getElementById("modal-1");
    let modalSecond = document.getElementById("modal-2");
    let closeFirst = document.getElementById("close-1");
    let closeSecond = document.getElementById("close-2");

    figureFirst.onclick = function () {
        modalFirst.style.display = "flex";
    }
    closeFirst.onclick = function () {
        modalFirst.style.display = "none";
    }

    figureSecond.onclick = function () {
        modalSecond.style.display = "flex";
    }
    closeSecond.onclick = function () {
        modalSecond.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modalFirst) {
            modalFirst.style.display = "none";
        } else if (event.target == modalSecond) {
            modalSecond.style.display = "none";
        }
    }


    //Show and hide sidebar form
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementsByClassName("toggle-btn");

    function hideShow() {
        for (let i = 0; i < toggleBtn.length; i++) {
            toggleBtn[i].onclick = function () {
                sidebar.classList.toggle("active");
            }
        }
    }
    hideShow();


    //Smooth scrolling

    function scrollIt(destination, duration = 200, easing = 'linear', callback) {

        const easings = {
            linear(t) {
                return t;
            },
            easeInQuad(t) {
                return t * t;
            },
            easeOutQuad(t) {
                return t * (2 - t);
            },
            easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
            easeInCubic(t) {
                return t * t * t;
            },
            easeOutCubic(t) {
                return (--t) * t * t + 1;
            },
            easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart(t) {
                return t * t * t * t;
            },
            easeOutQuart(t) {
                return 1 - (--t) * t * t * t;
            },
            easeInOutQuart(t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
            },
            easeInQuint(t) {
                return t * t * t * t * t;
            },
            easeOutQuint(t) {
                return 1 + (--t) * t * t * t * t;
            },
            easeInOutQuint(t) {
                return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
            }
        };

        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            if (callback) {
                callback();
            }
            return;
        }

        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (window.pageYOffset === destinationOffsetToScroll) {
                if (callback) {
                    callback();
                }
                return;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    }

    document.querySelector('#scrollToLanguages').addEventListener('click', () => {
        scrollIt(
            document.querySelector('.section-languages'),
            900,
            'easeOutQuad',
            () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
        );
    });
});