import * as productsModule from '../data/products.js';

let productsHtml = '';

displayProducts();

function displayProducts() {

    productsModule.products.forEach((product) => {
        let html = `<div class="product-products">
                        <div class="product-products-img-div">
                            <img src="${product.img01}" class="product-products-img" alt="product-img">
                        </div>
                        <div class="product-products-name-price-div">
                            <p class="product-products-name-price-p">${product.name}</p>
                            <p class="product-products-name-price-p">${product.price} DA</p>
                        </div>
                        <div class="product-products-add-to-cart-div">
                            <button class="add-to-cart-button js-add-to-cart" data-the-product-title="${product.title}" data-the-product-name="${product.name}" data-the-product-price="${product.price}" data-the-product-img01="${product.img01}" data-the-product-img02="${product.img02}" data-the-product-img03="${product.img03}" data-the-product-img04="${product.img04}">Add to cart</button>
                        </div>
                    </div>`;
        productsHtml += html;
    })

    document.querySelector('.js-products').innerHTML = productsHtml;

}
