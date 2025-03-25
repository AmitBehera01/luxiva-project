document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");

    const products = [
        { img: "../public/images/products/product1.jpg", name: "Soft Leather Jacket", price: "$120" },
        { img: "../public/images/products/product2.jpg", name: "Out Crop Sweater", price: "$80" },
        { img: "../public/images/products/product3.jpg", name: "Vintage Trench Coat", price: "$150" },
        { img: "../public/images/products/product4.jpg", name: "Casual Blazer", price: "$110" },
        { img: "../public/images/products/product5.jpg", name: "Modern Suit", price: "$200" },
        { img: "../public/images/products/product6.jpg", name: "Denim Jacket", price: "$90" },
        { img: "../public/images/products/product7.jpg", name: "Formal Shirt", price: "$60" },
        { img: "../public/images/products/product8.jpg", name: "Winter Hoodie", price: "$75" },
        { img: "../public/images/products/product9.jpg", name: "Slim Fit Jeans", price: "$70" },
        { img: "../public/images/products/product10.jpg", name: "Classic Overcoat", price: "$180" }
    ];

    function loadProducts() {
        products.forEach((product) => {
            let card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            `;
            slider.appendChild(card);
        });

        // Clone ALL products for smooth looping
        products.forEach((product) => {
            let clone = document.createElement("div");
            clone.classList.add("product-card");
            clone.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            `;
            slider.appendChild(clone);
        });
    }

    loadProducts();

    function slideLeft() {
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth / 2; // Jump to duplicate set
        }
        slider.scrollLeft -= 300;
    }

    function slideRight() {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0; // Jump to start
        }
        slider.scrollLeft += 300;
    }

    // Add Event Listeners
    document.querySelector(".prev-btn").addEventListener("click", slideLeft);
    document.querySelector(".next-btn").addEventListener("click", slideRight);

    // Keyboard Navigation
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") slideLeft();
        else if (event.key === "ArrowRight") slideRight();
    });
});
