let headerChange = false;

document.querySelector('.menu')
  .addEventListener('click', () => {
    if (!headerChange) {
        document.querySelector('.js-header').classList.add('header-after');
        document.querySelector('.js-header-02').classList.add('header-02-after');
        headerChange = true;
    }
    else if (headerChange) {
        document.querySelector('.js-header').classList.remove('header-after');
        document.querySelector('.js-header-02').classList.remove('header-02-after');
        headerChange = false;
    }
  })