document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.header-right ul li a');
    const headerHeight = document.querySelector('header').offsetHeight;

    function setActiveLink() {
        const scrollPosition = window.scrollY + headerHeight;

        menuLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });
    }

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const targetOffset = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set initial active link on page load
});