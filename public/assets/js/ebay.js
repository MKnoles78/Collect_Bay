$(document).ready(function () {

  $("#search-ebay").on("click", function () {
    let searchTerm = $("#search-term").val();
    location.replace(`/ebay/${searchTerm}`);
  });

  $(".add-to-collection").on("click", function (event) {
    event.preventDefault();
    const newCollection = {
      itemid: $(this).data("itemid"),
      title: $(this).data("title"),
      category: $(this).data("category"),
      location: $(this).data("location"),
      price: $(this).data("price"),
      ebayurl: $(this).data("ebayurl"),
      image: $(this).data("image")
    };
    $.post("/api/ebaycollections", newCollection).then(res => {
      console.log("This is the response: " + res);
      $(this).empty();
      window.location.replace(`/ebay/${searchTerm}`);
    }).catch((err) => {
      if (err) throw err;
      console.log("There was an error in POST /api/ebaycollections");
    });
  });
});