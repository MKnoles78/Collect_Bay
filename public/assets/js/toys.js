$( document ).ready(function(){
  $("#new-toy-form").on("submit", function (event) {
    event.preventDefault();
    console.log("you clicked me");
    const newToy = {
      category: $("#toyCategory").val(),
      manufacturer: $("#toyManufacturer").val(),
      make: $("#toyMake").val(),
      model: $("#toyModel").val(),
      quality: $("#toyQuality").val(),
    };
    console.log($("#toyCategory").val());
    console.log(newToy),
    $.ajax({
      url: "/api/collections/toys",
      method: "POST",
      data: {
        category: $("#toyCategory").val(),
        manufacturer: $("#toyManufacturer").val(),
        make: $("#toyMake").val(),
        model: $("#toyModel").val(),
        quality: $("#toyQuality").val(),
      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#toyCategory").val(""),
        $("#toyManufacturer").val(""),
        $("#toyMake").val(""),
        $("#toyModel").val(""),
        $("#toyQuality").val(""),
        setTimeout(function () {
          window.location.replace("/toys");
        }, 100);
      }
    });
  });
  $(".delete-toy").on("click", function (event){
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      console.log($(this).data("id"));
      const idToDelete = $(this).data("id");
      $.ajax({
        url: `/api/collections/toys/${idToDelete}`,
        method: "DELETE"
      }).done((response) => {
        if (response.success) {
          alert(response.message);
          location.reload();
        }
      });
    }
  });
});