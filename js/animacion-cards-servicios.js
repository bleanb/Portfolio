$(document).ready(function () {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAnimation() {
        var element1 = document.getElementById('circleCard1');
        var element2 = document.getElementById('circleCard2');
        var element3 = document.getElementById('circleCard3');

        if (isElementInViewport(element1)) {
            element1.classList.add('animar');
        }
        if (isElementInViewport(element2)) {
            element2.classList.add('animar');
        }
        if (isElementInViewport(element3)) {
            element3.classList.add('animar');
        }
    }

    checkAnimation();
    $(window).on('scroll', checkAnimation);
});