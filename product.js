function activeManu() {
  let productDetailsManu = document.querySelectorAll(
    "#product-details-manu h2"
  );
  let productDetailsDescription = document.getElementById(
    "product-details-description"
  );
  let productDetailsReview = document.getElementById("product-details-review");
  productDetailsManu[0].addEventListener("click", () => {
    productDetailsManu[1].classList.remove("text-primary");
    productDetailsManu[1].classList.remove("dark:text-darkPimary");
    productDetailsManu[0].classList.add("text-primary");
    productDetailsManu[0].classList.add("dark:text-darkPimary");
    productDetailsDescription.classList.remove("hidden");
    productDetailsReview.classList.add("hidden");
  });
  productDetailsManu[1].addEventListener("click", () => {
    productDetailsManu[0].classList.remove("text-primary");
    productDetailsManu[0].classList.remove("dark:text-darkPimary");
    productDetailsManu[1].classList.add("text-primary");
    productDetailsManu[1].classList.add("dark:text-darkPimary");
    productDetailsDescription.classList.add("hidden");
    productDetailsReview.classList.remove("hidden");
  });
}
function productAmountFunc() {
  var num = 1;
  let productAmounts = document.getElementById("product-amount");
  let productAmountUp = document.getElementById("product-amount-up");
  let productAmountDown = document.getElementById("product-amount-down");
  productAmountUp.addEventListener("click", () => {
    if (num >= 1) {
      num++;
      productAmounts.innerHTML = num;
    }
  });
  productAmountDown.addEventListener("click", () => {
    if (num > 1) {
      num--;
      productAmounts.innerHTML = num;
    } else {
      num = 1;
    }
  });
}
productAmountFunc();
activeManu();
