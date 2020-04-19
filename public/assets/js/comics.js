$( document ).ready(function() {

  $("#new-comic-form").on("submit", function (event) {
    event.preventDefault();
    const newComic = {
      category: $("#category").val(),
      publisher: $("#publisher").val(),
      title: $("#title").val(),
      issue: $("#issue").val(),
      quality: $("#quality").val()
    };
    console.log(newComic),
    $.ajax({
      url: "/api/collections/comics",
      method: "POST",
      data: {
        category: $("#category").val(),
        publisher: $("#publisher").val(),
        title: $("#title").val(),
        issue: $("#issue").val(),
        quality: $("#quality").val(),
      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#category").val(""),
        $("#publisher").val(""),
        $("#title").val(""),
        $("#issue").val(""),
        $("#quality").val(""),
        setTimeout(function () {
          window.location.replace("/collect");
        }, 100);
      }
    });
  });
});