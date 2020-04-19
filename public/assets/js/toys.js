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
});