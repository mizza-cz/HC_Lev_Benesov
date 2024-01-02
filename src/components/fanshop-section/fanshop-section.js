const productLinks = document.querySelectorAll(".fanshop-section__product");
const popup = document.getElementById("product-popup");
const productImage = document.getElementById("product-image");
const closePopup = document.getElementById("close-popup");

if (productLinks.length > 0 && popup && productImage && closePopup) {
  productLinks.forEach((productLink) => {
    productLink.addEventListener("click", (event) => {
      event.preventDefault();
      const imageUrl = productLink.querySelector("img").src;
      productImage.src = imageUrl;
      popup.style.display = "flex";
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup || event.target === productImage) {
      popup.style.display = "none";
    }
  });
} else {
}
