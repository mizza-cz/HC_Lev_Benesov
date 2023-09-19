// Проверяем наличие элементов на странице
const productLinks = document.querySelectorAll(".fanshop-section__product");
const popup = document.getElementById("product-popup");
const productImage = document.getElementById("product-image");
const closePopup = document.getElementById("close-popup");

// Проверяем, что все необходимые элементы существуют на странице
if (productLinks.length > 0 && popup && productImage && closePopup) {
  // Если элементы существуют, добавляем обработчики событий

  // Обработчик клика на продукт
  productLinks.forEach((productLink) => {
    productLink.addEventListener("click", (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке
      const imageUrl = productLink.querySelector("img").src;
      productImage.src = imageUrl;
      popup.style.display = "flex";
    });
  });

  // Обработчик клика для закрытия попапа при клике на "Закрыть"
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Обработчик клика для закрытия попапа при клике на фон или вне изображения продукта
  popup.addEventListener("click", (event) => {
    if (event.target === popup || event.target === productImage) {
      popup.style.display = "none";
    }
  });
} else {
  // Если какой-то из элементов отсутствует, выводим сообщение об ошибке
  console.error("error.");
}
