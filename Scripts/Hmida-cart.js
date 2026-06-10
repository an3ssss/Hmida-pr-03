import { theCart as cart } from "../data/cart.js";

displayCartProducts();

function displayCartProducts() {
    if (cart.length === 0) {
        let cartHtml = `<div class="cart-item-container">
                            <div style="min-width: 300px;">
                                <div class="order-summary-title-div">
                                    <p class="order-summary-title-p">Cart</p>
                                </div>
                            </div>
                            <div class="empty-cart-div">
                                <svg class="empty-cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="rgba(0, 0, 0, 0.4)"><path d="M236-102.21q-21-21.21-21-51T236.21-204q21.21-21 51-21T338-203.79q21 21.21 21 51T337.79-102q-21.21 21-51 21T236-102.21Zm400 0q-21-21.21-21-51T636.21-204q21.21-21 51-21T738-203.79q21 21.21 21 51T737.79-102q-21.21 21-51 21T636-102.21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>
                            </div>
                            <div class="empty-cart-p-div">
                                <p class="empty-cart-p">Your cart is empty</p>
                            </div>
                            <div class="empty-cart-button-div">
                                <a href="Hmida-Products.html"><button class="empty-cart-button">Return to shop</button></a>
                            </div>
                        </div>`;
        document.querySelector('.js-cart').innerHTML = cartHtml;
    }
    else if (cart.length !== 0) {
        let cartHtml = `<div class="order-summary-title-div">
                            <p class="order-summary-title-p">Cart</p>
                        </div>`;
        cart.forEach(() => {
            let html = `<div class="cart-item">
                            <div class="cart-item-div01">
                                <img src="Hmida-pics/Pdt01.PNG" alt="Cart-item" class="cart-item-pic">
                            </div>
                            <div class="cart-item-div02">
                                <p class="cart-item-p">Hmida-product-01</p>
                                <p class="cart-item-p">7 900 DA</p>
                            </div>
                            <div class="cart-item-div03">
                                <button class="delete-button js-delete-button">Delete</button>
                            </div>
                        </div>`;
            cartHtml += html;
        })
        document.querySelector('.js-cart').innerHTML = cartHtml;
        document.querySelectorAll('.js-delete-button')
            .forEach((button, i) => {
                button.addEventListener('click', () => {
                    cart.splice(i, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    displayCartProducts();
                })
            })
    }
}

function resetCart() {
    cart.length = 0;
    localStorage.removeItem('cart');
    displayCartProducts();
}

document.querySelector('.js-reset-cart')
  .addEventListener('click', () => {
    resetCart();
  })