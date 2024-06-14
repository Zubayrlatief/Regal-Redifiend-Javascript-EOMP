//footer


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
            image: "https://zubayrlatief.github.io/imagesEOMP/PARIJAN%20_%20Official%20website%20(1).jpeg",
            detail: 'COTTON ZIP UP',
            amount:800
        },
        {
            id: 5,
            name: 'OLIVE OPEN NECK SWEATER',
            image: "https://zubayrlatief.github.io/imagesEOMP/%F0%9F%91%95.jpeg",
            detail: 'COTTON ZIP UP',
            amount: 800
        },
        {
            id: 6,
            name: 'CREME OPEN NECK SWEATER',
            image: "https://zubayrlatief.github.io/imagesEOMP/download%20(2).jpg",
            detail: 'COTTON ZIP UP',
            amount: 800
        }
    ]))

let productWrapper = document.querySelector('[data-products]');
function displayProducts(args) {
    productWrapper.innerHTML = " "
    try {
        if (args) {
            args?.forEach((product) => {
                productWrapper.innerHTML += `
                <div class="col-md-4 d-flex justify-content-end g-4">
                <div class="card h-100">
                <img src="${product.image}" class="card-img-top h-100 w-100 img-fluid align-self-center" alt="${product.id}">
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

document.querySelector('#currYear').textContent = new Date().getFullYear()