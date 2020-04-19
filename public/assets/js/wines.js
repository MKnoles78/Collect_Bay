$( document ).ready(function(){

  $("#new-wine-form").on("submit", function (event) {
    event.preventDefault();
    console.log("you clicked me");
    const newWine = {
      category: $("#wineCategory").val(),
      vineyard: $("#wineVineyard").val(),
      style: $("#wineStyle").val(),
      variety: $("#wineVariety").val(),
      vintage: $("#wineVintage").val(),
      winegrade: $("#wineWineGrade").val()
    };
    console.log($("#wineCategory").val());
    console.log(newWine),
    $.ajax({
      url: "/api/collections/wines",
      method: "POST",
      data: {
        category: $("#wineCategory").val(),
        vineyard: $("#wineVineyard").val(),
        style: $("#wineStyle").val(),
        variety: $("#wineVariety").val(),
        vintage: $("#wineVintage").val(),
        winegrade: $("#wineWineGrade").val()
      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#wineCategory").val(""),
        $("#wineVineyard").val(""),
        $("#wineStyle").val(""),
        $("#wineVariety").val(""),
        $("#wineVintage").val(""),
        $("#wineWineGrade").val(""),
        setTimeout(function () {
          window.location.replace("/wines");
        }, 100);
      }
    });
  });
  $(".delete-wine").on("click", function (event){
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      console.log($(this).data("id"));
      const idToDelete = $(this).data("id");
      $.ajax({
        url: `/api/collections/wines/${idToDelete}`,
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