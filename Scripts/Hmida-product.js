import * as productsModule from '../data/products.js';
import { theCart as cart } from "../data/cart.js";

let product;

function getProduct() {

    let url = new URL(window.location.href);
    let productName = url.searchParams.get('product');
    let products = productsModule.products;
    products.forEach((theProduct) => {
        if (theProduct.name === productName) {
            product = theProduct;
        }
    })

    document.title = product.title;
    document.querySelector('.js-product-name').innerHTML = product.name;
    document.querySelector('.js-product-price').innerHTML = `${product.price} DA`;

}

getProduct();


// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let picture01 = document.querySelector('.js-product-main-pic-01');
let picture02 = document.querySelector('.js-product-main-pic-02');
let picture03 = document.querySelector('.js-product-main-pic-03');
let picture04 = document.querySelector('.js-product-main-pic-04');

let smallPicture02 = document.querySelector('.js-product-pic-02');
let smallPicture03 = document.querySelector('.js-product-pic-03');
let smallPicture04 = document.querySelector('.js-product-pic-04');

function displayImages() {

    picture01.src = product.img01;
    picture02.src = product.img02;
    picture03.src = product.img03;
    picture04.src = product.img04;

    smallPicture02.src = product.img02;
    smallPicture03.src = product.img03;
    smallPicture04.src = product.img04;

}

displayImages();

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

function removeAllClassesFromImages() {
    document.querySelectorAll('.product-pic-01')
      .forEach((image) => {
        image.classList.remove('product-show-pic01');
        image.classList.remove('product-show-pic02');
        image.classList.remove('product-show-pic03');
        image.classList.remove('product-show-pic04');
      })
}

let imgNum = 1;

function showPic() {
    removeAllClassesFromImages();
    if (imgNum === 1) {
        document.querySelectorAll('.product-pic-01')
          .forEach((image) => {
            image.classList.add('product-show-pic01');
          })
    }
    else if (imgNum === 2) {
        document.querySelectorAll('.product-pic-01')
          .forEach((image) => {
            image.classList.add('product-show-pic02');
          })
    }
    else if (imgNum === 3) {
        document.querySelectorAll('.product-pic-01')
          .forEach((image) => {
            image.classList.add('product-show-pic03');
          })
    }
    else if (imgNum === 4) {
        document.querySelectorAll('.product-pic-01')
          .forEach((image) => {
            image.classList.add('product-show-pic04');
          })
    }
}

document.querySelector('.js-product-pic-02')
  .addEventListener('click', () => {
    imgNum = 2;
    showPic();
  })

document.querySelector('.js-product-pic-03')
  .addEventListener('click', () => {
    imgNum = 3;
    showPic();
  })

document.querySelector('.js-product-pic-04')
  .addEventListener('click', () => {
    imgNum = 4;
    showPic();
  })

document.querySelector('.js-change-pic-button-left')
  .addEventListener('click', () => {
    if (imgNum === 1) {
        imgNum = 4;
    }
    else {
        imgNum--;
    }
    showPic();
  })

document.querySelector('.js-change-pic-button-right')
  .addEventListener('click', () => {
    if (imgNum === 4) {
        imgNum = 1;
    }
    else {
        imgNum++;
    }
    showPic();
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let sizeSelected = '';

function clearSizeSelected() {

    document.querySelectorAll('.size')
      .forEach((size) => {
        size.classList.remove('size-after');
      })

}

document.querySelectorAll('.size')
    .forEach((size) => {
    size.addEventListener('click', () => {
        clearSizeSelected();
        size.classList.add('size-after');
        sizeSelected = size.innerHTML;
    })
    })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let addToCartButton = document.querySelector('.js-product-ordering-add-to-cart');

function addToCartButtonUnableClicking() {
    addToCartButton.classList.add('product-ordering-add-to-cart-unable-clicking');
    setTimeout(() => {
        addToCartButton.classList.remove('product-ordering-add-to-cart-unable-clicking');
    }, 2000);
}

function addToCartWarning() {
    let waringContainer = document.querySelector('.add-to-cart-warning-main-div');
    let warningBox = document.querySelector('.add-to-cart-warning-div');
    if (!sizeSelected) {
        warningBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#fff" style="transform: translateY(-1px);"><path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                <p class="add-to-cart-warning">No size selected</p>`;
        warningBox.style.background = 'brown';
        waringContainer.classList.add('add-to-cart-warning-animation');
        setTimeout(() => {
            waringContainer.classList.remove('add-to-cart-warning-animation');
        }, 2000)
    }
    else if (sizeSelected) {
        warningBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#fff" style="transform: translateY(-1px);"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                <p class="add-to-cart-warning">Added !</p>`;
        warningBox.style.background = 'black';
        waringContainer.classList.add('add-to-cart-warning-animation');
        setTimeout(() => {
            waringContainer.classList.remove('add-to-cart-warning-animation');
        }, 2000);
    }
}

function addProductToCart() {
    if (!sizeSelected) {
        return 0;
    }
    else {
        cart.push({
        name: product.name,
        price: product.price,
        img: product.img01,
        size: sizeSelected
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

addToCartButton.addEventListener('click', () => {
    addToCartButtonUnableClicking();
    addToCartWarning();
    addProductToCart();
})

