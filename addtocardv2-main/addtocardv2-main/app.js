let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});



let products = [
{
id: 1,
name: 'BOOK',
image: 'books.jpeg',
price: 500
},
{
id: 2,
name: 'CAMERA',
image: 'camera.jpeg',
price: 120000
},
{
id: 3,
name: 'HEADPHONE',
image: 'headphone.webp',
price: 5000
},
{
id: 4,
name: 'IPHONE',
image: 'iphone.jpeg',
price: 123000
},
{
id: 5,
name: 'JEANS JACKAT',
image: 'jeans jackat.jpeg',
price: 3200
},
{
id: 6,
name: 'SHOES',
image: 'shoes.jpeg',
price: 1200
},
{
id: 7,
name: 'MAC',
image: 'macbook.jpg',
price: 230000
},
{
id: 8,
name: 'TEADY',
image: 'bear.webp',
price: 1200
},
{
id: 9,
name: 'WATCH',
image: 'istockphoto.webp',
price: "1500"
},
];
let listCards = [];


function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(listCards));
}


function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        listCards = JSON.parse(cartData);
        reloadCard();
    }
}


function initApp() {
    
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    });

    
    loadCartFromLocalStorage();
}


function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
    saveCartToLocalStorage(); 
}
const handleChange = () => {
var searchInput = document.getElementById("searchInput");
var searchValue = searchInput.value.trim().toLowerCase(); 
var itemDivs = document.querySelectorAll(".item");
var textError = document.getElementById("texterror");

if (searchValue === "") {
textError.textContent = "Please insert a value";
} else if (/^[A-Za-z]+$/.test(searchValue)) {
textError.textContent = ""; 
} else {
textError.textContent = "Only letters are allowed";
}

if (searchValue === "") {

itemDivs.forEach(itemDiv => {
    itemDiv.style.display = "block";
});
} else {
itemDivs.forEach(itemDiv => {
    var title = itemDiv.querySelector(".title");
    var name = title.textContent.toLowerCase();

    if (name.includes(searchValue)) {
        itemDiv.style.display = "block";
    } else {
        itemDiv.style.display = "none";
    }
});
}
};

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
    reloadCard();
    saveCartToLocalStorage();

    console.log("Key:", key);
    console.log("Quantity:", quantity);
    console.log("Updated listCards:", listCards);
}


function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    Object.values(listCards).forEach((value, key) => { 
        if (value != null) {
            const itemPrice = value.price * value.quantity;
            totalPrice += itemPrice;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${itemPrice.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


initApp();