// Smooth scrolling for anchor links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('#header').offsetHeight,
            behavior: 'smooth',
        });
    });
});

// Highlight the active navigation link
window.addEventListener('scroll', () => {
    const headerHeight = document.querySelector('#header').offsetHeight;

    // Determine which section is in the viewport
    let currentSectionId = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.clientHeight) {
            currentSectionId = section.id;
        }
    });

    // Highlight the active link and remove the highlight from others
    document.querySelectorAll('a.nav-link').forEach(link => {
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});

// Smooth scrolling to the top when clicking on the header logo
document.querySelector('#header-img').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Scroll to contact section on form submission
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');

    window.scrollTo({
        top: contactSection.offsetTop - document.querySelector('#header').offsetHeight,
        behavior: 'smooth',
    });
});

