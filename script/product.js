//footer
// document.querySelector('#currYear').textContent = new Date().getFullYear()





let products = localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify([
        {
            id: 1,
            name: 'WHITE COTTON BUTTON UP SWEATER',
            image: "https://iili.io/d9fzrMP.md.jpg",
            detail: 'COTTON BUTTON UP',
            amount: 700
        },
        {
            id: 2,
            name: 'BEIGE COTTON BUTTON UP SWEATER',
            image: "https://iili.io/d9qxRSa.md.jpg",
            detail: 'COTTON BUTTON UP',
            amount: 700
        },
        {
            id: 3,
            name: 'BLACK COTTON ZIP UP',
            image: "https://iili.io/d9fIaWB.md.jpg",
            detail: 'COTTON ZIP UP',
            amount: 800
        },
        {
            id: 4,
            name: 'BLUE COTTON ZIP UP SWEATER',
            image: "https://iili.io/d9CFlbS.md.jpg",
            detail: 'COTTON ZIP UP',
            amount:800
        },
        {
            id: 5,
            name: 'OLIVE OPEN NECK SWEATER',
            image: "https://iili.io/d9CFbBn.md.jpg",
            detail: 'COTTON ZIP UP',
            amount: 800
        }
    ]))
//this puts products/objects in html
let productWrapper = document.querySelector('[data-products]');
function displayProducts(args) {
    productWrapper.innerHTML = " "
    try {
        if (args) {
            args?.forEach((product) => {
                productWrapper.innerHTML += `
                <div class="col-md-4 d-flex justify-content-end">
                <div class="card">
                <img src="${product.image}" class="card-img-top h-50 w-50 img-fluid align-self-center" alt="${product.id}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.detail}</p>
                <p class="card-text">${product.amount}</p>
                <a class="btn btn-secondary" id="cart" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</a>
                </div>
                </div>
                </div>
                `
            })
        } else {
            productWrapper.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
                <p>No Products Found</p>
            </div>
            `
        }
    } catch (e) {
        alert('Error Loading Products')
    }
};

displayProducts(products);

//searches products by name
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(item => {
            return item.name.toLowerCase().includes(productSearch.value.toLowerCase());
        })
        displayProducts(searchItem);
    } catch (e) {
        alert('Function is under maintainance')
    }
})

//sorts by the price
let productSort = document.querySelector('.btn')
let highest = false;
productSort.addEventListener('click', () => {
    try {
        if (!highest) {
            products.sort((a, b) => b.amount - a.amount);
            highest = true;
        } else {
            products.sort((a, b) => a.amount - b.amount);
            highest = false;
        }
        displayProducts(products)
    } catch (e) {
        alert('This Function is under maintainance')
    }
});

//puts objects in new localStorage for other page
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(product) {
    debugger
    try {
        cart.push(product);
        localStorage.setItem('checkout', JSON.stringify(cart));
    } catch (e) {
        alert('The Cart is under maintainance')
    }
}



// let newProducts = [];

// let mainDisplay = document.querySelector('main')
// let products = JSON.parse(localStorage.getItem('products'));

// mainDisplay.innerHTML = products.map(function(product,index){
//     return `
//             <div class = "container-js-products">
//                 <h4>${product.make}</h4>
//                 <img src=" ${product.url}" alt = "${product.make}" height="100px" width="120px">
//                 <h6>${product.description}</h6>
//                 <button value = ${index} data-cart><i class="fa-solid fa-plus"></i></button>
//                 <p>R${product.price}</p>
//             </div>
//     `
// }).join('');

// //creating a function for the add button
// function addToCart(){
//     newProducts.push(product[index])
//     localStorage.setItem("newProducts",JSON.stringify(newProducts))
// }
// mainDisplay.addEventListener('click', function(event){
//     if (event.target.hasAttribute('data-cart')){
//         addToCart(event.target.value)
//     }
// })




// //Creating object
// function Product(id, name, price, url) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.url = url;
// }















//danyaal
// //first product
// let product1 = new products(1, 'WHITE COTTON BUTTON UP SWEATER', R700, 'https://iili.io/d9fzrMP.md.jpg');
// let product2 = new products(2, 'BEIGE COTTON BUTTON UP SWEATER', R800, 'https://iili.io/d9qxRSa.md.jpg');
// let product3 = new products(3, 'BLACK COTTON ZIP UP SWEATER', R700, 'https://iili.io/d9fIaWB.md.jpg');
// let product4 = new products(4, 'BLUE COTTON ZIP UP SWEATER', R800, 'http://127.0.0.1:5501/JEONJU%20Half%20Zip%20Sweater%20-%20S.jpg');
// let product5 = new products(5, 'OLIVE OPEN NECK SWEATER', R900, 'http://127.0.0.1:5501/Isabel%20Marant%20Ribbed-Knit%20Half-Zip%20Jumper.jpg');


// //pushing products to an array 
// products.push(product1, product2, product3, product4, product5);

// //setting the array in local storage 
// localStorage.setItem('products', JSON.stringify(products));

// //getting products stored in the browser
// products = JSON.parse(localStorage.getItem('products'))

// let newProducts = [];

// let mainDisplay = document.querySelector('main')
// let products = JSON.parse(localStorage.getItem('products'));

// mainDisplay.innerHTML = products.map(function(product,index){
//     return `
//             <div class = "container-js-products">
//                 <h4>${product.make}</h4>
//                 <img src=" ${product.url}" alt = "${product.make}" height="100px" width="120px">
//                 <h6>${product.description}</h6>
//                 <button value = ${index} data-cart><i class="fa-solid fa-plus"></i></button>
//                 <p>R${product.price}</p>
//             </div>
//     `
// }).join('');

// //creating a function for the add button
// function addToCart(){
//     newProducts.push(product[index])
//     localStorage.setItem("newProducts",JSON.stringify(newProducts))
// }
// mainDisplay.addEventListener('click', function(event){
//     if (event.target.hasAttribute('data-cart')){
//         addToCart(event.target.value)
//     }
// })


