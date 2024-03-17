let products = [
  {
    productName: "Nike Shoe.",
    img: "image/Product-1.1.png",
    price: "3000.00",
    off: "3600.00",
    save: "Save 20%",
  },
  {
    productName: "Nike Shoe.",
    img: "image/Product-1.2.png",
    price: "2520.00",
    off: "3000.00",
    save: "Save 16%",
  },
  {
    productName: "Nike Shoe.",
    img: "image/Product-1.3.png",
    price: "3000.00",
    off: "4000.00",
    save: "Save 25%",
  },
  {
    productName: "Nike Shoe.",
    img: "image/Product-1.4.png",
    price: "2200.00",
    off: "2500.00",
    save: "Save 12%",
  },
  {
    productName: "Vans Shoe.",
    img: "image/Product-1.5.png",
    price: "5391.00",
    off: "5990.00",
    save: "Save 10%",
  },
  {
    productName: "Adidas Shoe.",
    img: "image/Product-1.6.png",
    price: "3000.00",
    off: "3600.00",
    save: "Save 20%",
  },
  {
    productName: "Puma Shoe.",
    img: "image/Product-1.7.png",
    price: "3200.00",
    off: "4000.00",
    save: "Save 20%",
  },
  {
    productName: "Vans Shoe.",
    img: "image/Product-1.8.png",
    price: "1710.00",
    off: "1800.00",
    save: "Save 5%",
  },
];
function productFunc() {
  let displayProduct = "";
  products.forEach((product, idx) => {
    displayProduct += `<div class="card${idx + 1} card">
        <img data-index="${idx}"
          src="${product.img}"
          class="see h-44 w-72 object-cover"
        />
        <div class="product-info bg-white dark:bg-black">
          <p
            class="px-3 py-1 my-2 mx-4 rounded-full bg-primary inline-block text-xs dark:bg-darkPimary text-white"
          >
            Available
          </p>
          <h2 data-index="${idx}" class="see mx-4 text-2xl font-semibold">${
      product.productName
    }</h2>
          <h2 class="mx-4 text-xl font-medium">
            <span class="font-bold">&#2547;</span> ${product.price}
          </h2>
          <p class="ml-4 inline-block"><del>${product.off}</del></p>
          <p
            class="px-3 py-1 m-2 rounded-md bg-accent inline-block text-xs dark:bg-darkAccent text-white"
          >
            ${product.save}
          </p>
          <br />
          <div class="reting mx-4 flex">
            <i class="ri-star-fill text-golden"></i>
            <i class="ri-star-fill text-golden"></i>
            <i class="ri-star-fill text-golden"></i>
            <i class="ri-star-fill text-golden"></i>
            <i class="ri-star-half-fill text-golden"></i>
            <p class="mx-2">20k reviews</p>
          </div>
          <button class="btn hover:btn-hover">Add to cart</button>
          <button>
            <i
              class="ri-heart-fill text-2xl mr-4 opacity-50 hover:opacity-100"
            ></i>
          </button>
          <button data-index="${idx}" class="see">
            <i data-index="${idx}"
              class="ri-eye-fill see text-2xl opacity-50 hover:opacity-100"
            ></i>
          </button>
        </div>
      </div>`;
  });
  document.querySelector("#home-sec-product").innerHTML = displayProduct;
}
function openProducts() {
  let card = document.getElementById("home-sec-product");
  card.addEventListener("click", (det) => {
    if (det.target.classList.contains("see")) {
      location.href = `product-${det.target.dataset.index}.html`;
    }
  });
}
productFunc();
openProducts();
