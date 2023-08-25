// $(function () {
//   var hash = window.location.hash;
//   hash && $('ul.nav a[href="' + hash + '"]').tab("show");

//   $("body").on("click", ".nav-tabs a", function (e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     $(this).tab("show");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".hp-tabs__header li a");

  for (const link of tabLinks) {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      for (const otherLink of tabLinks) {
        otherLink.classList.remove("active");
      }
      link.classList.add("active");

      const category = link.dataset.category;
      const url = `/inc/ajax-youth.php?category=${category}`;
      const tab = document.querySelector(`#${category}-tab`);

      fetch(url, { method: "GET" })
        .then((response) => response.text())
        .then((response) => {
          tab.innerHTML = response;
        })
        .catch((error) => console.error("Chyba při načítání obsahu:", error));
    });
  }
});
