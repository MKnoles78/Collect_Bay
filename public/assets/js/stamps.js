$( document ).ready(function(){
  $("#new-stamp-form").on("submit", function (event) {
    event.preventDefault();
    console.log("you clicked me");
    const newStamp = {
      category: $("#stampCategory").val(),
      origincountry: $("#stampOriginCountry").val(),
      class: $("#stampClass").val(),
      postmark: $("#stampPostmark").val(),
      quality: $("#stampQuality").val()
    };
    console.log($("#stampCategory").val());
    console.log(newStamp),
    $.ajax({
      url: "/api/collections/stamps",
      method: "POST",
      data: {
        category: $("#stampCategory").val(),
        origincountry: $("#stampOriginCountry").val(),
        class: $("#stampClass").val(),
        postmark: $("#stampPostmark").val(),
        quality: $("#stampQuality").val()
      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#stampCategory").val(""),
        $("#stampOriginCountry").val(""),
        $("#stampClass").val(""),
        $("#stampPostmark").val(""),
        $("#stampQuality").val(""),
        setTimeout(function () {
          window.location.replace("/stamps");
        }, 100);
      }
    });
  });
});