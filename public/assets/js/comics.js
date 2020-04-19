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

  $(".delete-comic").on("click", function (event){
    console.log("you clicked me");
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      console.log($(this).data("id"));
      const idToDelete = $(this).data("id");
      $.ajax({
        url: `/api/collections/comics/${idToDelete}`,
        method: "DELETE"
      }).done((response) => {
        console.log(response);
        if (response.success) {
          alert(response.message);
          location.reload();
        }
      });
    }
  });
});