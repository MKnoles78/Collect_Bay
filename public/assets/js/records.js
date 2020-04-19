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
  $(".delete-record").on("click", function (event){
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      console.log($(this).data("id"));
      const idToDelete = $(this).data("id");
      $.ajax({
        url: `/api/collections/records/${idToDelete}`,
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