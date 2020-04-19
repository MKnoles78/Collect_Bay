$( document ).ready(function(){
  $("#new-card-form").on("submit", function (event) {
    event.preventDefault();
    console.log("you clicked me");
    const newCard = {
      category: $("#cardCategory").val(),
      manufacturer: $("#cardManufacturer").val(),
      player: $("#cardPlayer").val(),
      year: $("#cardYear").val(),
      quality: $("#cardQuality").val()
    };
    console.log($("#cardCategory").val());
    console.log(newCard),
    $.ajax({
      url: "/api/collections/cards",
      method: "POST",
      data: {
        category: $("#cardCategory").val(),
        manufacturer: $("#cardManufacturer").val(),
        player: $("#cardPlayer").val(),
        year: $("#cardYear").val(),
        quality: $("#cardQuality").val(),
      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#cardCategory").val(""),
        $("#cardManufacturer").val(""),
        $("#cardPlayer").val(""),
        $("#cardYear").val(""),
        $("#cardQuality").val(""),
        setTimeout(function () {
          window.location.replace("/cards");
        }, 100);
      }
    });
  });
});

