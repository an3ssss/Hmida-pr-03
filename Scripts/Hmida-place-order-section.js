import { algeriaData } from '../data/algeriaData.js';

displayWilaya();

displayCommunes();

function displayWilaya() {
    let wilayaSelectHtml = '<option value="" disabled selected>Select your state</option>';
    algeriaData.forEach((wilaya) => {
    let html = `<option value="${wilaya.name}">${wilaya.name}</option>`;
    wilayaSelectHtml += html;
    })
    document.querySelector('.js-wilaya-select').innerHTML = wilayaSelectHtml;
}

function displayCommunes() {
    let thewilayaSel = document.querySelector('.js-wilaya-select');
    let theWilaya = thewilayaSel.value;
    let communeHtml = '<option value="" disabled selected>Select your commune</option>';
    algeriaData.forEach((wilaya) => {
        if (theWilaya === wilaya.name) {
            let communes = wilaya.communes;
            communes.forEach((commune) => {
                let html = `<option value="${commune}">${commune}</option>`;
                communeHtml += html;
            })
        }
    })
    document.querySelector('.js-communes-select').innerHTML = communeHtml;
}

document.querySelector('.js-wilaya-select')
  .addEventListener('change', () => {
    displayCommunes();
  })


let note = document.querySelector('.js-note');

note.addEventListener('input',() => {
    let noteLength = note.value.length;
    document.querySelector('.js-length-counter').innerHTML = `${noteLength}/300`;
    if (noteLength === 300) {
        document.querySelector('.js-length-counter').classList.add('max-length')
    }
    else {
        document.querySelector('.js-length-counter').classList.remove('max-length');
    }
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


document.querySelector('.js-confirm-info')
  .addEventListener('click', () => {
    confirmCustomerInfo();
  })

let nameInput = document.querySelector('.js-customer-full-name');
let numberInput = document.querySelector('.js-customer-number');
let emailInput = document.querySelector('.js-customer-email');
let stateInput = document.querySelector('.js-wilaya-select');
let communeInput = document.querySelector('.js-communes-select');
let addressInput = document.querySelector('.js-customer-address');

let nameWaringP = document.querySelector('.js-customer-full-name-warning');
let numberWaringP = document.querySelector('.js-customer-number-warning');
let emailWaringP = document.querySelector('.js-customer-email-warning');
let stateWaringP = document.querySelector('.js-customer-state-warning');
let communeWaringP = document.querySelector('.js-customer-commune-warning');
let addressWaringP = document.querySelector('.js-customer-address-warning');

let nameConfirmed = false;
let numberConfirmed = false;
let emailConfirmed = false;
let stateConfirmed = false;
let communeConfirmed = false;
let addressConfirmed = false;

let customerInfoConfirmed = JSON.parse(localStorage.getItem('customerInfoConfirmed')) || false;

let customerName = JSON.parse(localStorage.getItem('customerName')) || '';
let customerNumber = JSON.parse(localStorage.getItem('customerNumber')) || '';
let customerEmail = JSON.parse(localStorage.getItem('customerEmail')) || '';
let customerState = JSON.parse(localStorage.getItem('customerState')) || '';
let customerCommune = JSON.parse(localStorage.getItem('customerCommune')) || '';
let customerAddress = JSON.parse(localStorage.getItem('customerAddress)')) || '';

function confirmCustomerInfo() {

    confirmCustomerFullName();
    confirmCustomerNumber();
    confirmCustomerEmail();
    confirmCustomerState();
    confirmCustomerCommune();
    confirmCustomerAddress();

    if (nameConfirmed === true && numberConfirmed === true && emailConfirmed === true && stateConfirmed === true && communeConfirmed === true && addressConfirmed === true) {
        customerInfoConfirmed = true;
        localStorage.setItem('customerInfoConfirmed', JSON.stringify(customerInfoConfirmed));
    }

    if (customerInfoConfirmed === true) {
        displayOrders();
    }

}

function confirmCustomerAddress() {

    let address = addressInput.value;

    if (address.length === 0) {
        addressWaringP.classList.remove('info-warning-removed');
        addressInput.style.borderColor = 'red'
        addressWaringP.innerHTML = 'Please enter your address';
        addressWaringP.classList.add('info-warning-displayed');
    }

    else if (address.length <= 10) {
        addressWaringP.classList.remove('info-warning-removed');
        addressInput.style.borderColor = 'red';
        addressWaringP.innerHTML = 'Please enter a more specific addres';
        addressWaringP.classList.add('info-warning-displayed');
    }

    else {
        addressConfirmed = true;
        customerAddress = address;
        localStorage.setItem('customerAddress', JSON.stringify(customerAddress));
        addressInput.style.borderColor = 'green';
        addressWaringP.classList.add('info-warning-removed');
        setTimeout(() => {
            addressWaringP.innerHTML = '';
        }, 300)
    }

}

function confirmCustomerCommune() {

    let commune = communeInput.value;

    if (commune === '') {
        communeWaringP.classList.remove('info-warning-removed');
        communeInput.style.borderColor = 'red';
        communeWaringP.innerHTML = 'Please enter your commune';
        communeWaringP.classList.add('info-warning-displayed');
    }
    else {
        communeConfirmed = true;
        customerCommune = commune;
        localStorage.setItem('customerCommune', JSON.stringify(customerCommune));
        communeInput.style.borderColor = 'green';
        communeWaringP.classList.add('info-warning-removed');
        setTimeout(() => {
            communeWaringP.innerHTML = '';
        }, 300)
    }

}

function confirmCustomerState() {

    let state = stateInput.value;

    if (state === '') {
        stateWaringP.classList.remove('info-warning-removed');
        stateInput.style.borderColor = 'red';
        stateWaringP.innerHTML = 'Please enter your state';
        stateWaringP.classList.add('info-warning-displayed');
    }
    else {
        stateConfirmed = true;
        customerState = state;
        localStorage.setItem('customerState', JSON.stringify(customerState));
        stateInput.style.borderColor = 'green';
        stateWaringP.classList.add('info-warning-removed');
        setTimeout(() => {
            stateWaringP.innerHTML = '';
        }, 300)
    }

}

function confirmCustomerEmail() {

    let email = emailInput.value;
    // A practical, balanced regex
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !regex.test(email)) {
        emailWaringP.classList.remove('info-warning-removed');
        emailInput.style.borderColor = 'red';
        emailWaringP.innerHTML = 'Please enter real rmail address';
        emailWaringP.classList.add('info-warning-displayed');
    }

    else if (email === '') {
        emailWaringP.classList.remove('info-warning-removed');
        emailInput.style.borderColor = 'red';
        emailWaringP.innerHTML = 'Please enter real rmail address';
        emailWaringP.classList.add('info-warning-displayed');
    }
    
    else {
        emailConfirmed = true;
        customerEmail = email;
        localStorage.setItem('customerEmail', JSON.stringify(customerEmail));
        emailInput.style.borderColor = 'green';
        emailWaringP.classList.add('info-warning-removed');
        setTimeout(() => {
            emailWaringP.innerHTML = '';
        }, 300)
    }

}

function confirmCustomerNumber() {

    let number = numberInput.value;

    if (number.length !== 10) {
        numberWaringP.classList.remove('info-warning-removed');
        numberInput.style.borderColor = 'red';
        numberWaringP.innerHTML = 'Please enter real phone number';
        numberWaringP.classList.add('info-warning-displayed');
    }
    
    else if (number.startsWith('05') || number.startsWith('06') || number.startsWith('07')) {
        numberConfirmed = true;
        customerNumber = number;
        localStorage.setItem('customerNumber', JSON.stringify(customerNumber));
        numberInput.style.borderColor = 'green';
        numberWaringP.classList.add('info-warning-removed');
        setTimeout(() => {
            numberWaringP.innerHTML = '';
        }, 300)
    }

    else {
        numberWaringP.classList.remove('info-warning-removed');
        numberInput.style.borderColor = 'red';
        numberWaringP.innerHTML = 'Please enter real phone number';
        numberWaringP.classList.add('info-warning-displayed');
    }
    
}

function confirmCustomerFullName() {

    let name = nameInput.value.trim();
    
    // 1. Split by spaces
    let parts = name.split(/\s+/);
    
    // 2. Check: At least 2 parts AND each part has at least 2 characters (e.g., to avoid "A B")
    let isFullName = parts.length >= 2 && parts.every(part => part.length >= 2);

    if (isFullName) {
        nameConfirmed = true;
        customerName = name;
        localStorage.setItem('customerName', JSON.stringify(customerName));
        nameInput.style.borderColor = 'green';
        nameWaringP.classList.add('info-warning-removed');
        setTimeout(() => {
            nameWaringP.innerHTML = '';
        }, 300)
    } else {
        nameWaringP.classList.remove('info-warning-removed');
        nameInput.style.borderColor = 'red';
        nameWaringP.innerHTML = 'Please enter your full name';
        nameWaringP.classList.add('info-warning-displayed');
    }

}



// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

function displayOrders() {
    console.log(customerName);    
    console.log(customerNumber);
    console.log(customerEmail);
    console.log(customerState);
    console.log(customerCommune);
    console.log(customerAddress);  
}

// localStorage.clear();