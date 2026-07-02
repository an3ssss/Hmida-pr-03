import { algeriaData } from '../data/algeriaData.js';
import { orders, ordersConfirmed } from '../data/orders.js';
import { ordersPlaced } from '../data/orders.js';
import { orderNumber } from '../data/orders.js';

console.log(orders);

let page = document.querySelector('.js-main');
let checking = document.querySelector('.js-loading-lottie-main');

let declinedlottie = `<div class="loading-lottie-container">
                            <dotlottie-player 
                                src="Lottie/1b788242-116a-11ee-88a8-93279dd3300b.json" 
                                background="transparent" 
                                speed="1" 
                                class="loading-lottie"
                                autoplay>
                            </dotlottie-player>
                        </div>
                        <p class="lottie-text">Information invalid. Please enter your informations</p>`;

let confirmedLottie = `<div class="loading-lottie-container">
                            <dotlottie-player 
                                src="Lottie/dc5fea5a-d198-11ef-9eef-7b853b01e5c7.json" 
                                background="transparent" 
                                speed="1" 
                                class="loading-lottie" 
                                autoplay>
                            </dotlottie-player>
                        </div>
                        <p class="lottie-text">Informations verified ! Loading orders...</p>`;


let customerInfoConfirmed = JSON.parse(localStorage.getItem('customerInfoConfirmed')) || false;


function appear(element) {
    setTimeout(() => {
        element.classList.remove('appear');
        element.classList.remove('disappear');
        element.classList.add('appear')
    }, 200)
}

function disappear(element) {
    setTimeout(() => {
        element.classList.remove('appear');
        element.classList.remove('disappear');
        element.classList.add('disappear')
    }, 200)
}

function changeLottie(newLottie) {
    checking.innerHTML = newLottie;
}

function turnOncheckingMode() {
    document.body.classList.add('body');
    page.classList.add('main-2');
}

function turnOffcheckingMode() {
    document.body.classList.remove('body');
    page.classList.remove('main-2');
}

function noOpacity(element) {
    element.classList.remove('opacity');
    element.classList.remove('no-opacity');
    element.classList.add('no-opacity');
}

function opacity(element) {
    element.classList.remove('opacity');
    element.classList.remove('no-opacity');
    element.classList.add('opacity');
}

appear(checking);

setTimeout(() => { disappear(checking); }, 1500);

if (customerInfoConfirmed) {
    setTimeout(() => { changeLottie(confirmedLottie) }, 2000);
}

else if (!customerInfoConfirmed) {
    setTimeout(() => { changeLottie(declinedlottie) }, 2000);
}

setTimeout(() => { appear(checking); }, 2100);

setTimeout(() => { disappear(checking); }, 3300);

setTimeout(() => { noOpacity(page); }, 3600);

setTimeout(() => { 
    turnOffcheckingMode();
    checkForCustomerInfoAndDisplayInfoPage() ;
    appear(page);
    setTimeout(() => {opacity( page ); }, 300);
}, 3800);

function checkForCustomerInfoAndDisplayInfoPage() {
    if (!customerInfoConfirmed) {
        console.log('ok');
        page.innerHTML = `<div class="ordering-info-main">
                            <div class="customer-info-title-div">
                                <p class="customer-info-title-p">Customer info</p>
                            </div>
                            <div class="input-group">
                                <input required="" type="text" name="name" autocomplete="on" class="input js-customer-full-name">
                                <label class="user-label">First and last name</label>
                                <p class="js-customer-full-name-warning info-warning"></p>
                            </div>
                            <div class="input-group">
                                <input required="" type="number" name="tel" autocomplete="on" class="input js-customer-number">
                                <label class="user-label">Phone number</label>
                                <p class="js-customer-number-warning info-warning"></p>
                            </div>
                            <div class="input-group">
                                <input required="" type="text" name="email" autocomplete="on" class="input js-customer-email">
                                <label class="user-label">Email address</label>
                                <p class="js-customer-email-warning info-warning"></p>
                            </div>
                            <div class="wilaya-select-div">
                                <select class="wilaya-select js-wilaya-select" required>
                                </select>
                                <p class="js-customer-state-warning info-warning"></p>
                            </div>
                            <div class="wilaya-select-div">
                                <select class="wilaya-select js-communes-select" required>
                                </select>
                                <p class="js-customer-commune-warning info-warning"></p>
                            </div>
                            <div class="input-group">
                                <input required="" type="text" name="street-address" autocomplete="on" class="input js-customer-address">
                                <label class="user-label">Address</label>
                                <p class="js-customer-address-warning info-warning"></p>
                            </div>
                            <div>
                                <div class="input-group">
                                    <textarea required="" type="text" name="text" autocomplete="off" class="js-note note" maxlength="300"></textarea>
                                    <label class="user-label">Note...</label>
                                </div> 
                                <p class="length-counter js-length-counter" style="text-align: end;padding-right: 10px;">0/300</p>
                            </div> 
                            <div class="confirm-info-button-div">
                                <button class="confirm-info-button js-confirm-info">Confirm</button>
                            </div>  
                        </div>
                        <div class="last-lines-div">
                            <div class="last-div-line-01">
                                <span class="last-line"></span>
                            </div>
                            <div class="last-div-line-02">
                                <span class="last-line"></span>
                            </div>
                        </div>
                        <div class="last-div-main">
                            <div class="last-div-01">
                                <p class="last-div-title-p">Support</p>
                                <a href="Hmida-Contact.html" class="last-div-link">Contact</a>
                                <a href="" class="last-div-link">My account</a>
                                <a href="Hmida-Delivery-section.html" class="last-div-link">Delevery</a>
                                <a href="Hmida-Contact.html" class="last-div-link">FAQ</a>
                            </div>
                            <div class="last-div-02">
                                <p class="last-div-title-p">About us</p>
                                <a href="Hmida-Our-store-section.html" class="last-div-link">Our store</a>
                                <a href="Hmida-Our-story-section.html" class="last-div-link">Our story</a>
                                <a href="" class="last-div-link">Authenticity Products</a>
                                <a href="" class="last-div-link">Loyalty</a>
                                <a href="" class="last-div-link">Program Gift Card</a>
                            </div>
                            <div class="last-div-03">
                                <p class="last-div-title-p">Log in to the website</p>
                                <div class="log-in-bar-container">
                                    <input type="email" class="log-in-bar" placeholder="youremail@examle.com">
                                </div>
                                <p class="email-password-p">Email address</p>
                                <div class="log-in-bar-container">
                                    <input type="password" class="log-in-bar" placeholder="Password">
                                </div>
                                <p class="email-password-p">Password</p>
                                <div class="forgot-password-div">
                                    <div class="remember-me-div">
                                        <input type="checkbox" class="remeber-me-input">
                                        <p class="remember-me-p">Remember me</p>
                                    </div>
                                    <p class="forgot-password-p">Forgot your password ?</p>
                                </div>
                                <div class="sign-in-button-container">
                                    <button class="sign-in-button">Sign in</button>
                                </div>
                            </div>
                        </div>`;
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

        // let customerInfoConfirmed = JSON.parse(localStorage.getItem('customerInfoConfirmed')) || false;

        let customerName = JSON.parse(localStorage.getItem('customerName')) || '';
        let customerNumber = JSON.parse(localStorage.getItem('customerNumber')) || '';
        let customerEmail = JSON.parse(localStorage.getItem('customerEmail')) || '';
        let customerState = JSON.parse(localStorage.getItem('customerState')) || '';
        let customerCommune = JSON.parse(localStorage.getItem('customerCommune')) || '';
        let customerAddress = JSON.parse(localStorage.getItem('customerAddress)')) || '';
        let customerNote = JSON.parse(localStorage.getItem('customerNote')) || '';

        function getCustomerNote() {
            let theNote = document.querySelector('.js-note');
            customerNote = theNote.value;
            localStorage.setItem('customerNote', JSON.stringify(customerNote));
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
                emailWaringP.innerHTML = 'Please enter a real email address';
                emailWaringP.classList.add('info-warning-displayed');
            }

            else if (email === '') {
                emailWaringP.classList.remove('info-warning-removed');
                emailInput.style.borderColor = 'red';
                emailWaringP.innerHTML = 'Please enter a real email address';
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
                numberWaringP.innerHTML = 'Please enter a real phone number';
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

        function confirmCustomerInfo() {

            confirmCustomerFullName();
            confirmCustomerNumber();
            confirmCustomerEmail();
            confirmCustomerState();
            confirmCustomerCommune();
            confirmCustomerAddress();
            getCustomerNote();

            if (nameConfirmed === true && numberConfirmed === true && emailConfirmed === true && stateConfirmed === true && communeConfirmed === true && addressConfirmed === true) {
                customerInfoConfirmed = true;
                localStorage.setItem('customerInfoConfirmed', JSON.stringify(customerInfoConfirmed));
            }


        }

        function displayOrdersButton() {
            console.log('okkkkk');
            disappear(page);
            setTimeout(() => {
                page.innerHTML = '';
                turnOncheckingMode();
                page.innerHTML = `<div class="loading-lottie-main js-loading-lottie-main">
                                    <div class="loading-lottie-container">
                                        <dotlottie-player 
                                            src="Lottie/4f99977e-1178-11ee-ba11-6f7eb2c6e070.json" 
                                            background="transparent" 
                                            speed="1" 
                                            class="loading-lottie"
                                            loop 
                                            autoplay>
                                        </dotlottie-player>
                                    </div>
                                    <p class="lottie-text">Loading orders...</p>
                                </div>`;
                let checking = document.querySelector('.js-loading-lottie-main');
                appear(page);
                appear(checking);
                setTimeout(() => { opacity(page); }, 200)
                setTimeout(() => { disappear(page); }, 1500)
                setTimeout(() => {
                    turnOffcheckingMode();
                    checkForCustomerInfoAndDisplayInfoPage();
                    appear(page);
                }, 2000);
            }, 300)
        }

        document.querySelector('.js-confirm-info')
            .addEventListener('click', () => {
                confirmCustomerInfo();
                if (customerInfoConfirmed) {
                    displayOrdersButton();
                    setTimeout(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }, 500);
                }
            });


    }

    else if (customerInfoConfirmed) {
            let customerName = JSON.parse(localStorage.getItem('customerName'));
            let customerNumber = JSON.parse(localStorage.getItem('customerNumber'));
            let customerEmail = JSON.parse(localStorage.getItem('customerEmail'));
            let customerState = JSON.parse(localStorage.getItem('customerState'));
            let customerCommune = JSON.parse(localStorage.getItem('customerCommune'));
            let customerAddress = JSON.parse(localStorage.getItem('customerAddress'));
            let customerNote = JSON.parse(localStorage.getItem('customerNote'));
            if (customerNote === '') {
                customerNote = ' " No Not From Customer "';
            }
            ordersPlaced.length = 0;
            localStorage.setItem('ordersPlaced', JSON.stringify(ordersPlaced));
    
                orders.forEach((order) => {
                    orderNumber.push('order');
                    ordersPlaced.push({
                        order: order.order,
                        orderTime: order.orderTime,
                        orderNumber: orderNumber.length,
                        orderPrice: order.orderPrice,
                        customerName: customerName,
                        customerNumber: customerNumber,
                        customerEmail: customerEmail,
                        customerState: customerState,
                        customerCommune: customerCommune,
                        customerAddress: customerAddress,
                        customerNote: customerNote
                    })
                localStorage.setItem('ordersPlaced', JSON.stringify(ordersPlaced));
            })
            let allOrdersHtml = '';
            ordersPlaced.forEach((orders) => {
                let orderHtml = '';
                let theHtml = '';
                orders.order.forEach((order) => {
                    let html = `<div class="product">
                                    <div class="product-pic-div">
                                        <img src="${order.img}" alt="product-pic" class="product-pic">
                                    </div>
                                    <div class="product-info-div">
                                        <p class="product-info">${order.name}</p>
                                        <p class="product-info">Size: ${order.size}</p>
                                    </div>
                                    <div class="product-price-div">
                                        <p class="product-price">${order.price} DA</p>
                                    </div>
                                </div>`;
                    theHtml += html;
                    orderHtml = `<div class="page-01-products">
                                    <p class="order-top-info">Order: #HM-921-${orders.orderNumber}</p>
                                    <p class="order-top-info">Time: ${orders.orderTime}</p>
                                    ${theHtml}
                                 </div>`
                })
                allOrdersHtml += orderHtml;
            })
            if (!allOrdersHtml) {
                    allOrdersHtml = `<div class="epmty-orders-main">
                                        <div class="empty-orders-icon-div">
                                            <svg class="empty-order-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/></svg>
                                        </div>
                                        <p class="empty-order-p">No Order Placed</p>
                                        <div class="return-to-shop-div">
                                            <a href="Hmida-Products.html" class="return-to-shop-link"><button class="return-to-shop">Return To Shop</button></a>
                                        </div>
                                        </div>`;
                }
            let ordersTotalPrice = 0;
            let ordersTotalItems = 0;
            ordersPlaced.forEach((placedOrder) => {
                let price = placedOrder.orderPrice;
                ordersTotalPrice += price;
                let items = 0;
                placedOrder.order.forEach(() => {
                    items += 1;
                })
                ordersTotalItems += items;
            })
            let ordersTotalDelivery = ordersPlaced.length * 850;
            console.log(ordersTotalDelivery);
            page.innerHTML = `<div class="orders">
                                    <div class="page-buttons-div">
                                        <button class="page-button-01 js-page-button-01"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff" style="transform: translateY(-2px);"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>Checkout</button>
                                        <button class="page-button-02 js-page-button02"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff" style="transform: translateY(-2px);"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>Order History</button>
                                    </div>
                                    <div class="orders-page-02 absolute-page">
                                        <div class="customer-info-title-div">
                                            <p class="customer-info-title-p">Confirmed orders</p>
                                        </div>
                                        <div class="epmty-orders-main">
                                            <div class="empty-orders-icon-div">
                                                <svg class="empty-order-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/></svg>
                                            </div>
                                            <p class="empty-order-p">No Order Confirmed</p>
                                            <div class="return-to-shop-div">
                                                <a href="Hmida-Products.html" class="return-to-shop-link"><button class="return-to-shop">Return To Shop</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="orders-page-01 absolute-page">
                                        <div class="customer-info-title-div">
                                            <p class="customer-info-title-p">Confirm your order</p>
                                        </div>
        
                                            ${allOrdersHtml}
                                        
                                        <div class="page-01-customer-order-info">
                                            <p class="page-01-customer-order-info-title"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M155-195q-35-35-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35q-50 0-85-35Zm113.5-56.5Q280-263 280-280t-11.5-28.5Q257-320 240-320t-28.5 11.5Q200-297 200-280t11.5 28.5Q223-240 240-240t28.5-11.5ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm628.5 108.5Q760-263 760-280t-11.5-28.5Q737-320 720-320t-28.5 11.5Q680-297 680-280t11.5 28.5Q703-240 720-240t28.5-11.5ZM680-440h170l-90-120h-80v120ZM360-540Z"/></svg> Shipping & Delivery</p>
                                            <p class="customer-order-info">Customer</p>
                                            <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg><p>${customerName}</p></div>
                                            <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><p>${customerNumber}</p></div>
                                            <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><p>${customerEmail}</p></div>
                                            <p class="customer-order-info">Address :</p>
                                            <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg><p>${customerAddress}</p></div>
                                            <p class="customer-order-info">Note :</p>
                                            <div class="customer-order-info">${customerNote}</div>
                                        </div>
                                        <div class="page-01-customer-payment-methode">
                                            <p class="page-01-customer-order-info-title"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg> Payment Method</p>
                                            <p class="payment-method"><input type="radio" class="payment-input js-payment-method" value="Cash On Delivery" name="payment-method">Cash On Delivery</p>
                                            <p class="payment-method"><input type="radio" class="payment-input js-payment-method" value="BaridiMob / CCP" name="payment-method">BaridiMob / CCP</p>
                                        </div>
                                        <div class="confirm-order-div">
                                            <div class="confirm-order-grid">
                                                <div class="confirm-order-p-div"><p class="confirm-order-p">Itmes(${ordersTotalItems}):</p></div>
                                                <div class="confirm-order-p-div"><p class="confirm-order-p">${ordersTotalPrice} DA</p></div>
                                                <div class="confirm-order-p-div"><p class="confirm-order-p">Delivery:</p></div>
                                                <div class="confirm-order-p-div"><p class="confirm-order-p">${ordersTotalDelivery} DA</p></div>
                                                <div class="confirm-order-p-div"><p class="confirm-order-p">Total:</p></div>
                                                <div class="confirm-order-p-div"><p class="confirm-order-p">${ordersTotalPrice + ordersTotalDelivery} DA</p></div>
                                            </div>
                                            <div class="confirm-order-buttons-div">
                                                <div style="display: flex;"><button class="confirm-order-button js-confirm-order"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Confirm</button></div>
                                                <div style="display: flex;"><button class="cancel-order-button js-cancel-order"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Cancel</button></div>
                                            </div>
                                        </div>
                                    </div>           
                                </div>
                                <div class="last-lines-div">
                                    <div class="last-div-line-01">
                                        <span class="last-line"></span>
                                    </div>
                                    <div class="last-div-line-02">
                                        <span class="last-line"></span>
                                    </div>
                                </div>
                                <div class="last-div-main">
                                    <div class="last-div-01">
                                        <p class="last-div-title-p">Support</p>
                                        <a href="Hmida-Contact.html" class="last-div-link">Contact</a>
                                        <a href="" class="last-div-link">My account</a>
                                        <a href="Hmida-Delivery-section.html" class="last-div-link">Delevery</a>
                                        <a href="Hmida-Contact.html" class="last-div-link">FAQ</a>
                                    </div>
                                    <div class="last-div-02">
                                        <p class="last-div-title-p">About us</p>
                                        <a href="Hmida-Our-store-section.html" class="last-div-link">Our store</a>
                                        <a href="Hmida-Our-story-section.html" class="last-div-link">Our story</a>
                                        <a href="" class="last-div-link">Authenticity Products</a>
                                        <a href="" class="last-div-link">Loyalty</a>
                                        <a href="" class="last-div-link">Program Gift Card</a>
                                    </div>
                                    <div class="last-div-03">
                                        <p class="last-div-title-p">Log in to the website</p>
                                        <div class="log-in-bar-container">
                                            <input type="email" class="log-in-bar" placeholder="youremail@examle.com">
                                        </div>
                                        <p class="email-password-p">Email address</p>
                                        <div class="log-in-bar-container">
                                            <input type="password" class="log-in-bar" placeholder="Password">
                                        </div>
                                        <p class="email-password-p">Password</p>
                                        <div class="forgot-password-div">
                                            <div class="remember-me-div">
                                                <input type="checkbox" class="remeber-me-input">
                                                <p class="remember-me-p">Remember me</p>
                                            </div>
                                            <p class="forgot-password-p">Forgot your password ?</p>
                                        </div>
                                        <div class="sign-in-button-container">
                                            <button class="sign-in-button">Sign in</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="confirm-canceling-order-main">
                                    <div class="confirm-canceling-order-box">
                                        <div class="confirm-canceling-order-inner-box">
                                            <p class="confirm-canceling-order-p">Are you sure you want to cancel the order ?</p>
                                            <div class="confirm-canceling-order-button-div"><button class="confirm-canceling-order-button-sure js-confirm-cancel-order-sure">Yes, I am</button></div>
                                            <div class="confirm-canceling-order-button-div"><button class="confirm-canceling-order-button-not-sure js-confirm-canceling-order-button-not-sure">No, I'm not</button></div>
                                        </div>
                                    </div>
                                </div>`;
    
            let pageOne = document.querySelector('.orders-page-01');
            let pageTwo = document.querySelector('.orders-page-02');
            let pageOneBtn = document.querySelector('.page-button-01');
            let pageTwoBtn = document.querySelector('.page-button-02');
            let pageShowen = '';
    
            pageTwo.classList.remove('page-showen');
            pageOne.classList.add('page-showen'); 
    
            function pagesButtons() {
                pageOneBtn.classList.add('unable-clicking');
                pageTwoBtn.classList.add('unable-clicking');
                setTimeout(() => {
                    pageOneBtn.classList.remove('unable-clicking');
                    pageTwoBtn.classList.remove('unable-clicking');
                }, 210)
            }
    
            function showPageOne() {
                if (pageShowen === '2') {
    
                    pageOne.classList.remove('disappear');
                    pageTwo.classList.remove('disappear');
                    pageOne.classList.remove('appear');
                    pageTwo.classList.remove('appear');
    
                    pageTwo.classList.add('disappear');
                    pageOne.classList.add('appear');
    
                    pagesButtons();
    
                    setTimeout(() => {
                        pageTwo.classList.remove('page-showen');
                        pageOne.classList.add('page-showen');
                        pageShowen = '1';
                    }, 200)
    
                }
            }
    
            pageOneBtn.addEventListener('click', () => {
                showPageOne();
            })
    
            function showPageTwo() {
                if (pageShowen === '1' || pageShowen === '') {
    
                    pageOne.classList.remove('disappear');
                    pageTwo.classList.remove('disappear');
                    pageOne.classList.remove('appear');
                    pageTwo.classList.remove('appear');
    
                    pageOne.classList.add('disappear');
                    pageTwo.classList.add('appear');
    
                    pagesButtons();
    
    
                    setTimeout(() => {
                        pageOne.classList.remove('page-showen');
                        pageTwo.classList.add('page-showen');
                        pageShowen = '2'; 
                    }, 200)
    
                }   
            }
    
            pageTwoBtn.addEventListener('click', () => {
                showPageTwo();
            })
    
            let paymentMethodInput = document.querySelectorAll('.js-payment-method');
            let paymentMethod = '';
    
            function getSelectedPaymentMethod() {
    
                let selected = document.querySelector('input[name="payment-method"]:checked');
                
                if (selected) {
                    paymentMethod = selected.value;
                }
                
                console.log(paymentMethod);
    
            }
    
            paymentMethodInput.forEach((input) => {
                input.addEventListener('change', () => {
                    getSelectedPaymentMethod();
                })
            })
    
    
            function ConfirmOrders() {

                console.log(ordersPlaced);

                if (ordersPlaced.length === 0) {
                    document.querySelector('.confrim-order-warning-p').innerHTML = 'No Orders Placed';
                    let warningMain = document.querySelector('.js-confirm-order-warning-main');
                    warningMain.classList.add('confirm-order-warning-animation');
                    document.querySelector('.js-confirm-order').classList.add('unable-clicking');
                    setTimeout(() => {
                        warningMain.classList.remove('confirm-order-warning-animation');
                        document.querySelector('.js-confirm-order').classList.remove('unable-clicking');
                    }, 2000);
                    return null;
                }

                else if (paymentMethod === '') {
                    let warningMain = document.querySelector('.js-confirm-order-warning-main');
                    warningMain.classList.add('confirm-order-warning-animation');
                    document.querySelector('.js-confirm-order').classList.add('unable-clicking');
                    setTimeout(() => {
                        warningMain.classList.remove('confirm-order-warning-animation');
                        document.querySelector('.js-confirm-order').classList.remove('unable-clicking');
                    }, 2000);
                    return null;
                }


                localStorage.setItem('orderNumber', JSON.stringify(orderNumber));
                console.log('orders confirmed');
                console.log(ordersPlaced);
                showPageTwo();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                ordersPlaced.forEach((orderPlaced) => {
                    ordersConfirmed.push({
                        confirmedOrder: orderPlaced.order,
                        orderNumber: orderPlaced.orderNumber,
                        orderTime: orderPlaced.orderTime,
                        orderTotalPrice: ordersTotalPrice + 850,
                        customerName: orderPlaced.customerName,
                        customerNumber: orderPlaced.customerNumber,
                        customerEmail: orderPlaced.customerEmail,
                        customerState: orderPlaced.customerState,
                        customerCommune: orderPlaced.customerCommune,
                        customerAddress: orderPlaced.customerAddress,
                        customerNote: orderPlaced.customerNote,
                        paymentMethod: paymentMethod,
                        orderState: 'Preparing'
                    })
                })
                orders.length = 0;
                localStorage.setItem('orders', JSON.stringify(orders));
                ordersPlaced.length = 0;
                localStorage.setItem('ordersPlaced', JSON.stringify(ordersPlaced));
                console.log(ordersConfirmed);
                localStorage.setItem('ordersConfirmed', JSON.stringify(ordersConfirmed));

                // discharge page 01 OOOOOOOOOOOOOOOOOOOO

                orders.forEach((order) => {
                    orderNumber.push('order');
                    ordersPlaced.push({
                        order: order.order,
                        orderTime: order.orderTime,
                        orderNumber: orderNumber.length,
                        customerName: customerName,
                        customerNumber: customerNumber,
                        customerEmail: customerEmail,
                        customerState: customerState,
                        customerCommune: customerCommune,
                        customerAddress: customerAddress,
                        customerNote: customerNote
                    })
                localStorage.setItem('ordersPlaced', JSON.stringify(ordersPlaced));
                })
                allOrdersHtml = '';
                ordersPlaced.forEach((orders) => {
                    let orderHtml = '';
                    let theHtml = '';
                    orders.order.forEach((order) => {
                        let html = `<div class="product">
                                        <div class="product-pic-div">
                                            <img src="${order.img}" alt="product-pic" class="product-pic">
                                        </div>
                                        <div class="product-info-div">
                                            <p class="product-info">${order.name}</p>
                                            <p class="product-info">Size: ${order.size}</p>
                                        </div>
                                        <div class="product-price-div">
                                            <p class="product-price">${order.price} DA</p>
                                        </div>
                                    </div>`;
                        theHtml += html;
                        orderHtml = `<div class="page-01-products">
                                        <p class="order-top-info">Order: ${orders.orderNumber}</p>
                                        <p class="order-top-info">Time: ${orders.orderTime}</p>
                                        ${theHtml}
                                    </div>`
                    })
                    allOrdersHtml += orderHtml;
                })

                if (!allOrdersHtml) {
                    allOrdersHtml = `<div class="epmty-orders-main">
                                        <div class="empty-orders-icon-div">
                                            <svg class="empty-order-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/></svg>
                                        </div>
                                        <p class="empty-order-p">No Order Placed</p>
                                        <div class="return-to-shop-div">
                                            <a href="Hmida-Products.html" class="return-to-shop-link"><button class="return-to-shop">Return To Shop</button></a>
                                        </div>
                                        </div>`;
                }

                setTimeout(() => {
                    pageOne.innerHTML = `<div class="customer-info-title-div">
                                        <p class="customer-info-title-p">Confirm your order</p>
                                    </div>
    
                                        ${allOrdersHtml}
                                    
                                    <div class="page-01-customer-order-info">
                                        <p class="page-01-customer-order-info-title"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M155-195q-35-35-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35q-50 0-85-35Zm113.5-56.5Q280-263 280-280t-11.5-28.5Q257-320 240-320t-28.5 11.5Q200-297 200-280t11.5 28.5Q223-240 240-240t28.5-11.5ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm628.5 108.5Q760-263 760-280t-11.5-28.5Q737-320 720-320t-28.5 11.5Q680-297 680-280t11.5 28.5Q703-240 720-240t28.5-11.5ZM680-440h170l-90-120h-80v120ZM360-540Z"/></svg> Shipping & Delivery</p>
                                        <p class="customer-order-info">Customer</p>
                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg><p>${customerName}</p></div>
                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><p>${customerNumber}</p></div>
                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><p>${customerEmail}</p></div>
                                        <p class="customer-order-info">Address :</p>
                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg><p>${customerAddress}</p></div>
                                        <p class="customer-order-info">Note :</p>
                                        <div class="customer-order-info">${customerNote}</div>
                                    </div>
                                    <div class="page-01-customer-payment-methode">
                                        <p class="page-01-customer-order-info-title"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg> Payment Method</p>
                                        <p class="payment-method"><input type="radio" class="payment-input js-payment-method" value="Cash On Delivery" name="payment-method">Cash On Delivery</p>
                                        <p class="payment-method"><input type="radio" class="payment-input js-payment-method" value="BaridiMob / CCP" name="payment-method">BaridiMob / CCP</p>
                                    </div>
                                    <div class="confirm-order-div">
                                        <div class="confirm-order-grid">
                                            <div class="confirm-order-p-div"><p class="confirm-order-p">Itmes(0):</p></div>
                                            <div class="confirm-order-p-div"><p class="confirm-order-p">0 DA</p></div>
                                            <div class="confirm-order-p-div"><p class="confirm-order-p">Delivery:</p></div>
                                            <div class="confirm-order-p-div"><p class="confirm-order-p">0 DA</p></div>
                                            <div class="confirm-order-p-div"><p class="confirm-order-p">Total:</p></div>
                                            <div class="confirm-order-p-div"><p class="confirm-order-p">0 DA</p></div>
                                        </div>
                                        <div class="confirm-order-buttons-div">
                                            <div style="display: flex;"><button class="confirm-order-button js-confirm-order"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Confirm</button></div>
                                            <div style="display: flex;"><button class="cancel-order-button js-cancel-order"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Cancel</button></div>
                                        </div>
                                    </div>
                                </div>           
                            </div>`;
                    

                    document.querySelector('.js-confirm-order').classList.add('unable-clicking');
                    document.querySelector('.js-cancel-order').classList.add('unable-clicking');

                    document.querySelector('.js-confirm-order').style.opacity = '0.8';
                    document.querySelector('.js-cancel-order').style.opacity = '0.8';

                    syncHeights();

                }, 300);

                // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

                let ordersConfirmedMainHtml = '';
                ordersConfirmed.forEach((theConfirmedOrder) => {
                    let orderConfirmedTotalPrice = 0;
                    console.log('ok');
                    let theOrdersHtml = '';
                    theConfirmedOrder.confirmedOrder.forEach((product) => {
                        let html = `<div class="product">
                                        <div class="product-pic-div">
                                            <img src="${product.img}" alt="product-pic" class="product-pic">
                                        </div>
                                        <div class="product-info-div">
                                            <p class="product-info">${product.name}</p>
                                            <p class="product-info">Size: ${product.size}</p>
                                        </div>
                                        <div class="product-price-div">
                                            <p class="product-price">${product.price} DA</p>
                                        </div>
                                    </div>`;
                        theOrdersHtml += html;
                        orderConfirmedTotalPrice += product.price;
                        console.log('ok');
                    })
                    ordersConfirmedMainHtml += `<div class="confirmed-order">
                                                    <p class="confirmed-order-main-info">Order: #HM-921-${theConfirmedOrder.orderNumber}</p>
                                                    <p class="confirmed-order-main-info">Time: ${theConfirmedOrder.orderTime}</p>
                                                    
                                                    ${theOrdersHtml};

                                                    <div class="order-confirmed-customer-info">
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerName}</p></div>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerNumber}</p></div>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerEmail}</p></div>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerAddress}</p></div>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">Note :</p>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">${theConfirmedOrder.customerNote}</p>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">Delivery Time : 24h - 72h</p>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.paymentMethod}</p></div>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">Order Total : ${orderConfirmedTotalPrice + 850} DA</p>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M612-292 440-464v-216h80v184l148 148-56 56Zm-498-25q-13-29-21-60t-11-63h81q3 21 8.5 42t13.5 41l-71 40ZM82-520q3-32 11-63.5t22-60.5l70 40q-8 20-13.5 41t-8.5 43H82Zm165 366q-27-20-50-43.5T154-248l70-40q14 18 29.5 33.5T287-225l-40 71Zm-22-519-71-40q20-27 43-50t50-43l40 71q-17 14-32.5 29.5T225-673ZM440-82q-32-3-63.5-11T316-115l40-70q20 8 41 13.5t43 8.5v81Zm-84-693-40-70q29-14 60.5-22t63.5-11v81q-22 3-43 8.5T356-775ZM520-82v-81q22-3 43-8.5t41-13.5l40 70q-29 14-60.5 22T520-82Zm84-693q-20-8-41-13.5t-43-8.5v-81q32 3 63.5 11t60.5 22l-40 70Zm109 621-40-71q17-14 32.5-29.5T735-287l71 40q-20 27-43 50.5T713-154Zm22-519q-14-17-29.5-32.5T673-735l40-71q27 19 50 42t42 50l-70 41Zm62 153q-3-22-8.5-43T775-604l70-41q13 30 21.5 61.5T878-520h-81Zm48 204-70-40q8-20 13.5-41t8.5-43h81q-3 32-11 63.5T845-316Z"/></svg><p class="order-confirmed-customer-info-p">Order State : ${theConfirmedOrder.orderState}</p></div>
                                                    </div>
                                                </div>`;
                                                console.log('ok');
                    
                    pageTwo.innerHTML = `<div class="customer-info-title-div">
                                            <p class="customer-info-title-p">Confirmed orders</p>
                                        </div>
                                        <div class="page-02-main-container">
                                            <div class="page-02-container">
                                            ${ordersConfirmedMainHtml};
                                            </div>
                                        </div>`;
                })

                syncHeights();


            }
    
            document.querySelector('.js-confirm-order')
              .addEventListener('click', () => {
                ConfirmOrders();
              })

            // Cenceling Button
    
            function cancelOrders() {

                orders.length = 0;
                localStorage.setItem('orders', JSON.stringify(orders));
                ordersPlaced.length = 0;
                localStorage.setItem('ordersPlaced', JSON.stringify(ordersPlaced));

                disappear(page);

                setTimeout(() => {
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                    });
                }, 100);

                

                setTimeout(() => {

                    // discharge page 01 OOOOOOOOOOOOOOOOOOOO

                    orders.forEach((order) => {
                        orderNumber.push('order');
                        ordersPlaced.push({
                            order: order.order,
                            orderTime: order.orderTime,
                            orderNumber: orderNumber.length,
                            customerName: customerName,
                            customerNumber: customerNumber,
                            customerEmail: customerEmail,
                            customerState: customerState,
                            customerCommune: customerCommune,
                            customerAddress: customerAddress,
                            customerNote: customerNote
                        })
                    localStorage.setItem('ordersPlaced', JSON.stringify(ordersPlaced));
                    })
                    allOrdersHtml = '';
                    ordersPlaced.forEach((orders) => {
                        let orderHtml = '';
                        let theHtml = '';
                        orders.order.forEach((order) => {
                            let html = `<div class="product">
                                            <div class="product-pic-div">
                                                <img src="${order.img}" alt="product-pic" class="product-pic">
                                            </div>
                                            <div class="product-info-div">
                                                <p class="product-info">${order.name}</p>
                                                <p class="product-info">Size: ${order.size}</p>
                                            </div>
                                            <div class="product-price-div">
                                                <p class="product-price">${order.price} DA</p>
                                            </div>
                                        </div>`;
                            theHtml += html;
                            orderHtml = `<div class="page-01-products">
                                            <p class="order-top-info">Order: ${orders.orderNumber}</p>
                                            <p class="order-top-info">Time: ${orders.orderTime}</p>
                                            ${theHtml}
                                        </div>`
                        })
                        allOrdersHtml += orderHtml;
                    })

                    if (!allOrdersHtml) {
                        allOrdersHtml = `<div class="epmty-orders-main">
                                            <div class="empty-orders-icon-div">
                                                <svg class="empty-order-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/></svg>
                                            </div>
                                            <p class="empty-order-p">No Order Placed</p>
                                            <div class="return-to-shop-div">
                                                <a href="Hmida-Products.html" class="return-to-shop-link"><button class="return-to-shop">Return To Shop</button></a>
                                            </div>
                                         </div>`;
                    }

                    pageOne.innerHTML = `<div class="customer-info-title-div">
                                                        <p class="customer-info-title-p">Confirm your order</p>
                                                    </div>
                    
                                                        ${allOrdersHtml}
                                                    
                                                    <div class="page-01-customer-order-info">
                                                        <p class="page-01-customer-order-info-title"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M155-195q-35-35-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35q-50 0-85-35Zm113.5-56.5Q280-263 280-280t-11.5-28.5Q257-320 240-320t-28.5 11.5Q200-297 200-280t11.5 28.5Q223-240 240-240t28.5-11.5ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm628.5 108.5Q760-263 760-280t-11.5-28.5Q737-320 720-320t-28.5 11.5Q680-297 680-280t11.5 28.5Q703-240 720-240t28.5-11.5ZM680-440h170l-90-120h-80v120ZM360-540Z"/></svg> Shipping & Delivery</p>
                                                        <p class="customer-order-info">Customer</p>
                                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg><p>${customerName}</p></div>
                                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><p>${customerNumber}</p></div>
                                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><p>${customerEmail}</p></div>
                                                        <p class="customer-order-info">Address :</p>
                                                        <div class="customer-order-info"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg><p>${customerAddress}</p></div>
                                                        <p class="customer-order-info">Note :</p>
                                                        <div class="customer-order-info">${customerNote}</div>
                                                    </div>
                                                    <div class="page-01-customer-payment-methode">
                                                        <p class="page-01-customer-order-info-title"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg> Payment Method</p>
                                                        <p class="payment-method"><input type="radio" class="payment-input js-payment-method" value="Cash On Delivery" name="payment-method">Cash On Delivery</p>
                                                        <p class="payment-method"><input type="radio" class="payment-input js-payment-method" value="BaridiMob / CCP" name="payment-method">BaridiMob / CCP</p>
                                                    </div>
                                                    <div class="confirm-order-div">
                                                        <div class="confirm-order-grid">
                                                            <div class="confirm-order-p-div"><p class="confirm-order-p">Itmes(0):</p></div>
                                                            <div class="confirm-order-p-div"><p class="confirm-order-p">0 DA</p></div>
                                                            <div class="confirm-order-p-div"><p class="confirm-order-p">Delivery:</p></div>
                                                            <div class="confirm-order-p-div"><p class="confirm-order-p">0 DA</p></div>
                                                            <div class="confirm-order-p-div"><p class="confirm-order-p">Total:</p></div>
                                                            <div class="confirm-order-p-div"><p class="confirm-order-p">0 DA</p></div>
                                                        </div>
                                                        <div class="confirm-order-buttons-div">
                                                            <div style="display: flex;"><button class="confirm-order-button js-confirm-order"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Confirm</button></div>
                                                            <div style="display: flex;"><button class="cancel-order-button js-cancel-order"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Cancel</button></div>
                                                        </div>
                                                    </div>
                                                </div>           
                                            </div>`;
                        

                    document.querySelector('.js-confirm-order').classList.add('unable-clicking');
                    document.querySelector('.js-cancel-order').classList.add('unable-clicking');

                    document.querySelector('.js-confirm-order').style.opacity = '0.8';
                    document.querySelector('.js-cancel-order').style.opacity = '0.8';

                    appear(page);

                    syncHeights();

                }, 500);

                syncHeights();
   
                

            }

            let cancelingConfirmation = document.querySelector('.confirm-canceling-order-main');

            document.querySelector('.js-confirm-canceling-order-button-not-sure')
              .addEventListener('click', () => {
                disappear(cancelingConfirmation);
                cancelingConfirmation.classList.remove('confirm-canceling-order-main-after');
              })
    
            document.querySelector('.js-confirm-cancel-order-sure')
              .addEventListener('click', () => {
                cancelOrders();
                disappear(cancelingConfirmation);
                cancelingConfirmation.classList.remove('confirm-canceling-order-main-after');
              })

            document.querySelector('.js-cancel-order')
              .addEventListener('click', () => {
                if (ordersPlaced.length === 0) {
                    document.querySelector('.confrim-order-warning-p').innerHTML = 'No Orders Placed';
                    let warningMain = document.querySelector('.js-confirm-order-warning-main');
                    warningMain.classList.add('confirm-order-warning-animation');
                    document.querySelector('.js-cancel-order').classList.add('unable-clicking');
                    setTimeout(() => {
                        warningMain.classList.remove('confirm-order-warning-animation');
                        document.querySelector('.js-cancel-order').classList.remove('unable-clicking');
                    }, 2000);
                    return null;
                }               
                appear(cancelingConfirmation);
                cancelingConfirmation.classList.add('confirm-canceling-order-main-after');
              })

            // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


            let ordersConfirmedMainHtml = '';
                ordersConfirmed.forEach((theConfirmedOrder) => {
                    let orderConfirmedTotalPrice = 0;
                    console.log('ok');
                    let theOrdersHtml = '';
                    theConfirmedOrder.confirmedOrder.forEach((product) => {
                        let html = `<div class="product">
                                        <div class="product-pic-div">
                                            <img src="${product.img}" alt="product-pic" class="product-pic">
                                        </div>
                                        <div class="product-info-div">
                                            <p class="product-info">${product.name}</p>
                                            <p class="product-info">Size: ${product.size}</p>
                                        </div>
                                        <div class="product-price-div">
                                            <p class="product-price">${product.price} DA</p>
                                        </div>
                                    </div>`;
                        theOrdersHtml += html;
                        orderConfirmedTotalPrice += product.price;
                        console.log('ok');
                    })
                    ordersConfirmedMainHtml += `<div class="confirmed-order">
                                                    <p class="confirmed-order-main-info">Order: #HM-921-${theConfirmedOrder.orderNumber}</p>
                                                    <p class="confirmed-order-main-info">Time: ${theConfirmedOrder.orderTime}</p>
                                                    
                                                    ${theOrdersHtml};

                                                    <div class="order-confirmed-customer-info">
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerName}</p></div>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerNumber}</p></div>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerEmail}</p></div>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.customerAddress}</p></div>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">Note :</p>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">${theConfirmedOrder.customerNote}</p>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">Delivery Time : 24h - 72h</p>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(70, 70, 70)"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg><p class="order-confirmed-customer-info-p">${theConfirmedOrder.paymentMethod}</p></div>
                                                        <p class="order-confirmed-customer-info-p" style="margin: 10px;">Order Total : ${orderConfirmedTotalPrice + 850} DA</p>
                                                        <div class="order-confirmed-customer-info-div"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M612-292 440-464v-216h80v184l148 148-56 56Zm-498-25q-13-29-21-60t-11-63h81q3 21 8.5 42t13.5 41l-71 40ZM82-520q3-32 11-63.5t22-60.5l70 40q-8 20-13.5 41t-8.5 43H82Zm165 366q-27-20-50-43.5T154-248l70-40q14 18 29.5 33.5T287-225l-40 71Zm-22-519-71-40q20-27 43-50t50-43l40 71q-17 14-32.5 29.5T225-673ZM440-82q-32-3-63.5-11T316-115l40-70q20 8 41 13.5t43 8.5v81Zm-84-693-40-70q29-14 60.5-22t63.5-11v81q-22 3-43 8.5T356-775ZM520-82v-81q22-3 43-8.5t41-13.5l40 70q-29 14-60.5 22T520-82Zm84-693q-20-8-41-13.5t-43-8.5v-81q32 3 63.5 11t60.5 22l-40 70Zm109 621-40-71q17-14 32.5-29.5T735-287l71 40q-20 27-43 50.5T713-154Zm22-519q-14-17-29.5-32.5T673-735l40-71q27 19 50 42t42 50l-70 41Zm62 153q-3-22-8.5-43T775-604l70-41q13 30 21.5 61.5T878-520h-81Zm48 204-70-40q8-20 13.5-41t8.5-43h81q-3 32-11 63.5T845-316Z"/></svg><p class="order-confirmed-customer-info-p">Order State : ${theConfirmedOrder.orderState}</p></div>
                                                    </div>
                                                </div>`;
                                                console.log('ok');
                    
                    pageTwo.innerHTML = `<div class="customer-info-title-div">
                                            <p class="customer-info-title-p">Confirmed orders</p>
                                        </div>
                                        <div class="page-02-main-container">
                                            <div class="page-02-container">
                                            ${ordersConfirmedMainHtml};
                                            </div>
                                        </div>`;
                })

            console.log(ordersConfirmed);

            syncHeights();

            function syncHeights() {

                let parent = document.querySelector('.orders');
                let children = Array.from(parent.querySelectorAll('.absolute-page'));

                let maxHeight = Math.max(...children.map(child => child.offsetHeight));

                parent.style.minHeight = `${maxHeight}px`;
            }

            
    
        }
}

// localStorage.clear();