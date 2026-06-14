window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

let header = document.querySelector('.js-header');

header.classList.add('animated-header');

setTimeout(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
}, 3500)

setTimeout(() => {
    header.classList.add('normal-header');
    header.classList.remove('animated-header');
}, 4300);