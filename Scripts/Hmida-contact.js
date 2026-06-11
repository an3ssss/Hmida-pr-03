let qst01 = false;
let btn01 = document.querySelector('.js-qst-01-button');

btn01.addEventListener('click', () => {
    let FAQ01 = document.querySelector('.js-FAQ-01');
    if (!qst01) {
        document.querySelector('.qst-01-qst-p').classList.add('qst-01-qst-p-after');
        btn01.classList.add('qst-01-button-after');
        FAQ01.classList.add('FAQ-01-after');
        qst01 = true;
    }
    else if (qst01) {
        document.querySelector('.qst-01-qst-p').classList.remove('qst-01-qst-p-after');
        btn01.classList.remove('qst-01-button-after');
        FAQ01.classList.remove('FAQ-01-after');
        qst01 = false;
    }
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let qst02 = false;
let btn02 = document.querySelector('.js-qst-02-button');


btn02.addEventListener('click', () => {
    let FAQ02 = document.querySelector('.js-FAQ-02');
    if (!qst02) {
        document.querySelector('.qst-02-qst-p').classList.add('qst-02-qst-p-after');
        btn02.classList.add('qst-02-button-after');
        FAQ02.classList.add('FAQ-02-after');
        qst02 = true;
    }
    else if (qst02) {
        document.querySelector('.qst-02-qst-p').classList.remove('qst-02-qst-p-after');
        btn02.classList.remove('qst-02-button-after');
        FAQ02.classList.remove('FAQ-02-after');
        qst02 = false;
    }
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let qst03 = false;
let btn03 = document.querySelector('.js-qst-03-button');


btn03.addEventListener('click', () => {
    let FAQ03 = document.querySelector('.js-FAQ-03');
    if (!qst03) {
        document.querySelector('.qst-03-qst-p').classList.add('qst-03-qst-p-after');
        btn03.classList.add('qst-03-button-after');
        FAQ03.classList.add('FAQ-03-after');
        qst03 = true;
    }
    else if (qst03) {
        document.querySelector('.qst-03-qst-p').classList.remove('qst-03-qst-p-after');
        btn03.classList.remove('qst-03-button-after');
        FAQ03.classList.remove('FAQ-03-after');
        qst03 = false;
    }
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let qst04 = false;
let btn04 = document.querySelector('.js-qst-04-button');


btn04.addEventListener('click', () => {
    let FAQ04 = document.querySelector('.js-FAQ-04');
    if (!qst04) {
        document.querySelector('.qst-04-qst-p').classList.add('qst-04-qst-p-after');
        btn04.classList.add('qst-04-button-after');
        FAQ04.classList.add('FAQ-04-after');
        qst04 = true;
    }
    else if (qst04) {
        document.querySelector('.qst-04-qst-p').classList.remove('qst-04-qst-p-after');
        btn04.classList.remove('qst-04-button-after');
        FAQ04.classList.remove('FAQ-04-after');
        qst04 = false;
    }
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let qst05 = false;
let btn05 = document.querySelector('.js-qst-05-button');


btn05.addEventListener('click', () => {
    let FAQ05 = document.querySelector('.js-FAQ-05');
    if (!qst05) {
        document.querySelector('.qst-05-qst-p').classList.add('qst-05-qst-p-after');
        btn05.classList.add('qst-05-button-after');
        FAQ05.classList.add('FAQ-05-after');
        qst05 = true;
    }
    else if (qst05) {
        document.querySelector('.qst-05-qst-p').classList.remove('qst-05-qst-p-after');
        btn05.classList.remove('qst-05-button-after');
        FAQ05.classList.remove('FAQ-05-after');
        qst05 = false;
    }
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let qst06 = false;
let btn06 = document.querySelector('.js-qst-06-button');


btn06.addEventListener('click', () => {
    let FAQ06 = document.querySelector('.js-FAQ-06');
    if (!qst06) {
        document.querySelector('.qst-06-qst-p').classList.add('qst-06-qst-p-after');
        btn06.classList.add('qst-06-button-after');
        FAQ06.classList.add('FAQ-06-after');
        qst06 = true;
    }
    else if (qst06) {
        document.querySelector('.qst-06-qst-p').classList.remove('qst-06-qst-p-after');
        btn06.classList.remove('qst-06-button-after');
        FAQ06.classList.remove('FAQ-06-after');
        qst06 = false;
    }
  })
  
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 

let message = document.querySelector('.js-message');

message.addEventListener('input',() => {
    let messageLength = message.value.length;
    document.querySelector('.js-length-counter').innerHTML = `${messageLength}/300`;
    if (messageLength === 300) {
        document.querySelector('.js-length-counter').classList.add('max-length')
    }
    else {
        document.querySelector('.js-length-counter').classList.remove('max-length');
    }
  })


