$( document ).ready(function(){
  $("#new-record-form").on("submit", function (event) {
    event.preventDefault();
    console.log("you clicked me");
    const newRecord = {
      category: $("#recordCategory").val(),
      artist: $("#recordArtist").val(),
      album: $("#recordAlbum").val(),
      quality: $("#recordQuality").val()
    };
    console.log($("#recordCategory").val());
    console.log(newRecord),
    $.ajax({
      url: "/api/collections/records",
      method: "POST",
      data: {
        category: $("#recordCategory").val(),
        artist: $("#recordArtist").val(),
        album: $("#recordAlbum").val(),
        quality: $("#recordQuality").val(),
      }
    }).done(function (response) {
      console.log(response);
      if (response.success) {
        $("#recordCategory").val(""),
        $("#recordArtist").val(""),
        $("#recordAlbum").val(""),
        $("#recordQuality").val(""),
        setTimeout(function () {
          window.location.replace("/records");
        }, 100);
      }
    });
  });
});