import * as productsModule from '../data/products.js';
import { theCart as cart } from "../data/cart.js";

let productPic01 = document.querySelector('.js-product-main-pic-01');
let productPic02 = document.querySelector('.js-product-main-pic-02');
let productPic03 = document.querySelector('.js-product-main-pic-03');
let productPic04 = document.querySelector('.js-product-main-pic-04');
let pictureShowed = 1;

function showPic01() {
    pictureShowed = 1;
    showThePic();
}

function showPic02() {
    pictureShowed = 2;
    showThePic();
}

document.querySelector('.js-product-pic-02')
   .addEventListener('click', () => {
        showPic02();
    })

function showPic03() {
    pictureShowed = 3;
    showThePic();
}

document.querySelector('.js-product-pic-03')
   .addEventListener('click', () => {
        showPic03();
    })

function showPic04() {
    pictureShowed = 4;
    showThePic();
}

document.querySelector('.js-product-pic-04')
   .addEventListener('click', () => {
        showPic04();
    })

function showThePic() {

    removeAllClasses();

    if (pictureShowed === 1) {
        productPic01.classList.add('product-show-pic01');
        productPic02.classList.add('product-show-pic01');
        productPic03.classList.add('product-show-pic01');
        productPic04.classList.add('product-show-pic01');
    }

    else if (pictureShowed === 2) {
        productPic01.classList.add('product-show-pic02');
        productPic02.classList.add('product-show-pic02');
        productPic03.classList.add('product-show-pic02');
        productPic04.classList.add('product-show-pic02');
    }

    else if (pictureShowed === 3) {
        productPic01.classList.add('product-show-pic03');
        productPic02.classList.add('product-show-pic03');
        productPic03.classList.add('product-show-pic03');
        productPic04.classList.add('product-show-pic03');
    }

    else if (pictureShowed === 4) {
        productPic01.classList.add('product-show-pic04');
        productPic02.classList.add('product-show-pic04');
        productPic03.classList.add('product-show-pic04');
        productPic04.classList.add('product-show-pic04');
    }

}

function removeAllClasses() {

        productPic01.classList.remove('product-show-pic01');
        productPic02.classList.remove('product-show-pic01');
        productPic03.classList.remove('product-show-pic01');
        productPic04.classList.remove('product-show-pic01');

        productPic01.classList.remove('product-show-pic02');
        productPic02.classList.remove('product-show-pic02');
        productPic03.classList.remove('product-show-pic02');
        productPic04.classList.remove('product-show-pic02');

        productPic01.classList.remove('product-show-pic03');
        productPic02.classList.remove('product-show-pic03');
        productPic03.classList.remove('product-show-pic03');
        productPic04.classList.remove('product-show-pic03');

        productPic01.classList.remove('product-show-pic04');
        productPic02.classList.remove('product-show-pic04');
        productPic03.classList.remove('product-show-pic04');
        productPic04.classList.remove('product-show-pic04');

}

function changePicButtonLeft() {

    if (pictureShowed === 1) {
        pictureShowed = 4;
    }

    else {
        pictureShowed --;
    }

    if (pictureShowed === 1) {
        showPic01();
    }

    else if (pictureShowed === 2) {
        showPic02();
    }

    else if (pictureShowed === 3) {
        showPic03();
    }

    else if (pictureShowed === 4) {
        showPic04();
    }

}

document.querySelector('.js-change-pic-button-left')
   .addEventListener('click', () => {
       changePicButtonLeft();
   })

function changePicButtonRight() {

    if (pictureShowed === 4) {
        pictureShowed = 1;
    }

    else {
        pictureShowed ++;
    }

    if (pictureShowed === 1) {
        showPic01();
    }

    else if (pictureShowed === 2) {
        showPic02();
    }

    else if (pictureShowed === 3) {
        showPic03();
    }

    else if (pictureShowed === 4) {
        showPic04();
    }

}

document.querySelector('.js-change-pic-button-right')
   .addEventListener('click', () => {
       changePicButtonRight();
   })



// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let sizeSelected = '';

function clearSizeSelected() {

    sizeSelected = '';

    document.querySelector('.js-size-XS').classList.remove('size-after');
    document.querySelector('.js-size-S').classList.remove('size-after');
    document.querySelector('.js-size-M').classList.remove('size-after');
    document.querySelector('.js-size-L').classList.remove('size-after');
    document.querySelector('.js-size-XL').classList.remove('size-after');

}

function selectSizeXS() {
    clearSizeSelected();
    sizeSelected = 'XS';
    document.querySelector('.js-size-XS').classList.add('size-after');
}

document.querySelector('.js-size-XS')
  .addEventListener('click', () => {
    selectSizeXS();
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOO

function selectSizeS() {
    clearSizeSelected();
    sizeSelected = 'S';
    document.querySelector('.js-size-S').classList.add('size-after');
}

document.querySelector('.js-size-S')
  .addEventListener('click', () => {
    selectSizeS();
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOO

function selectSizeM() {
    clearSizeSelected();
    sizeSelected = 'M';
    document.querySelector('.js-size-M').classList.add('size-after');
}

document.querySelector('.js-size-M')
  .addEventListener('click', () => {
    selectSizeM();
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOO

function selectSizeL() {
    clearSizeSelected();
    sizeSelected = 'L';
    document.querySelector('.js-size-L').classList.add('size-after');
}

document.querySelector('.js-size-L')
  .addEventListener('click', () => {
    selectSizeL();
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOO

function selectSizeXL() {
    clearSizeSelected();
    sizeSelected = 'XL';
    document.querySelector('.js-size-XL').classList.add('size-after');
}

document.querySelector('.js-size-XL')
  .addEventListener('click', () => {
    selectSizeXL();
  })

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let product01 = productsModule.products[0];
let product02 = productsModule.products[1];
let product03 = productsModule.products[2];

function addToCartButtonUnableClicking(product) {
    let buttonAddToCart;
    if (product === product01) {
        buttonAddToCart = document.querySelector('.js-product-ordering-add-to-cart-01');
        buttonAddToCart.classList.add('product-ordering-add-to-cart-unable-clicking');    
        setTimeout(() => {
            buttonAddToCart.classList.remove('product-ordering-add-to-cart-unable-clicking');
        }, 2000);
    }
    else if (product === product02) {
        buttonAddToCart = document.querySelector('.js-product-ordering-add-to-cart-02');
        buttonAddToCart.classList.add('product-ordering-add-to-cart-unable-clicking');    
        setTimeout(() => {
            buttonAddToCart.classList.remove('product-ordering-add-to-cart-unable-clicking');
        }, 2000);
    }
    else if (product === product03) {
        buttonAddToCart = document.querySelector('.js-product-ordering-add-to-cart-03');
        buttonAddToCart.classList.add('product-ordering-add-to-cart-unable-clicking');    
        setTimeout(() => {
            buttonAddToCart.classList.remove('product-ordering-add-to-cart-unable-clicking');
        }, 2000);
    }
}

function addToCartWarning() {
    let warning = document.querySelector('.js-add-to-cart-warning');
    if (!sizeSelected) {
        warning.innerHTML = '';
        warning.classList.remove('add-to-cart-warning-animation');
        warning.classList.add('add-to-cart-warning-animation');
        warning.classList.remove('add-to-cart-waring-green');
        warning.innerHTML = 'No size selected !';
        setTimeout(() => {
            warning.innerHTML = '';
            warning.classList.remove('add-to-cart-warning-animation');
        }, 2000);
    }
    else if (sizeSelected) {
        warning.innerHTML = '';
        warning.classList.remove('add-to-cart-warning-animation');
        warning.classList.add('add-to-cart-warning-animation');
        warning.classList.add('add-to-cart-waring-green');
        warning.innerHTML = 'Added !';
        setTimeout(() => {
            warning.innerHTML = '';
            warning.classList.remove('add-to-cart-warning-animation');
        }, 2000);
    }
}

function addProductToCart(product) {
    cart.push({
        name: product.name,
        price: product.price,
        img: product.img01,
        size: sizeSelected
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}


function addToCart(product) {
    if (!sizeSelected) {
        addToCartWarning();
        addToCartButtonUnableClicking(product);
        return 0;
    }
    else if (sizeSelected) {
        addToCartWarning();
        addToCartButtonUnableClicking(product);
        addProductToCart(product);
        console.log(cart);
    }
}

try {
    document.querySelector('.js-product-ordering-add-to-cart-01')
        .addEventListener('click', () => {
            addToCart(product01);
    })
}
catch {
    console.log('ok');
}

try {
    document.querySelector('.js-product-ordering-add-to-cart-02')
        .addEventListener('click', () => {
            addToCart(product02);
    })
}
catch {
    console.log('ok');
}

try {
    document.querySelector('.js-product-ordering-add-to-cart-03')
        .addEventListener('click', () => {
            addToCart(product03);
    })
}
catch {
    console.log('ok');
}

console.log(cart);


