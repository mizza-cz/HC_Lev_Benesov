$(document).ready(function () {
  var itemsPerPage = 9;
  var visibleItems = itemsPerPage;

  $(".list-posts li").hide();

  $(".list-posts li:lt(" + visibleItems + ")").show();

  $("#loadMoreBtn").click(function (e) {
    e.preventDefault();
    $(".list-posts li:hidden:lt(" + itemsPerPage + ")").show();

    if ($(".list-posts li:hidden").length === 0) {
      $("#loadMoreBtn").hide();
    }
  });
});
