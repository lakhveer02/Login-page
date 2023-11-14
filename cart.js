var items = [
    {
        name: "vishal",
        image: "preet/imgs/pic01.jpg",
        description: "Lorem ipsum dolor sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit ",
    },
    {
        name: "deep",
        image: "preet/imgs/pic02.jpg",
        description: "Lorem ipsum dolor sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit ",
    },
    {
        name: "aman",
        image: "preet/imgs/pic03.jpg",
        description: "Lorem ipsum dolor sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit ",
    },
    {
        name: "wind",
        image: "preet/imgs/pic04.jpg",
        description: "Lorem ipsum dolor sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit ",
    },
    {
        name: "reet",
        image: "preet/imgs/pic05.jpg",
        description: "Lorem ipsum dolor sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit ",
    },
    {
        name: "jeet",
        image: "preet/imgs/jj.jpg",
        description: "Lorem ipsum dolor sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit sit amet consecture et sed adipicing elit Curabiotur vel sem sit dolor sit amet consectetur et sit ",
    },
];  const handleChange = () => {
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var boyDivs = document.querySelectorAll(".boy");
    
    boyDivs.forEach(boyDiv => {
        var h1 = boyDiv.querySelector("h1");
        var name = h1.textContent.toLowerCase();
        
        if (searchValue === "") {
            boyDiv.style.display = ""; 
        } else if (name.includes(searchValue)) {
            boyDiv.style.display = "block"; 
        } else {
            boyDiv.style.display = "none"; 
        }
    });
};


var cart = {};
var cartCountElement = document.getElementById("cartCount");

function addToCart(itemName) {
    if (cart[itemName]) {
        cart[itemName]++;
    } else {
        cart[itemName] = 1;
    }
    updateCartCount();
}

function removeFromCart(itemName) {
    if (cart[itemName]) {
        cart[itemName]--;
        if (cart[itemName] === 0) {
            delete cart[itemName];
        }
        updateCartCount();
    }
}

function updateCartCount() {
    var totalCount = Object.values(cart).reduce((total, count) => total + count, 0);
    cartCountElement.textContent = totalCount;
}

var section = document.querySelector(".list");
items.forEach(item => {
    var itemDiv = createItemDiv(item);
    section.appendChild(itemDiv);
});

function createItemDiv(item) {
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("boy");

    var velDiv = document.createElement("div");
    velDiv.classList.add("vel");

    var img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.classList.add("img");

    var h1 = document.createElement("h1");
    h1.textContent = item.name;

    var p = document.createElement("p");
    p.textContent = item.description;

    var addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.classList.add("my");
    addButton.addEventListener("click", function () {
        addToCart(item.name);
    });

    var minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.classList.add("my");
    minusButton.addEventListener("click", function () {
        removeFromCart(item.name);
    });

    velDiv.appendChild(img);
    velDiv.appendChild(h1);
    velDiv.appendChild(p);
    velDiv.appendChild(addButton);
    velDiv.appendChild(minusButton);

    itemDiv.appendChild(velDiv);

    return itemDiv;
}