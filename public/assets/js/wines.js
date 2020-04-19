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
});