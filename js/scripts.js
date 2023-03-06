$(document).ready(function () {
  let itemList = $("#item-list");

  $("form").submit(function (e) {
    e.preventDefault();
    let newItem = $("input").val();
    if (newItem !== "") {
      itemList.append(
        '<li><span class="item">' +
          newItem +
          '</span><button class="delete">X</button></li>'
      );
      $("input").val("");
    }
  });

  itemList.on("click", ".item", function () {
    $(this).toggleClass("strike");
  });

  itemList.on("click", ".delete", function () {
    $(this).parent().remove();
  });

  itemList.sortable();
});
