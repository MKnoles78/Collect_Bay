$( document ).ready(function() {

  $("#new-connect-form").on("submit", function (event) {
    console.log("you clicked me");
    event.preventDefault();
    const newConnect = {
      author: $("#author").val(),
      body: $("#body").val(),
    };
    console.log(newConnect),
    $.ajax({
      url: "/api/collections/connects",
      method: "POST",
      data: {
        author: $("#author").val(),
        body: $("#body").val(),

      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#author").val(""),
        $("#body").val(""),
        setTimeout(function () {
          window.location.replace("/connect");
        }, 100);
      }
    });
  });

  $(".delete-connect").on("click", function (event){
    console.log("you clicked me");
    const confirmDelete = confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      console.log($(this).data("id"));
      const idToDelete = $(this).data("id");
      $.ajax({
        url: `/api/collections/connects/${idToDelete}`,
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