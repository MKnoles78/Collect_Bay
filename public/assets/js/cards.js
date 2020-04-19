// $( document ).ready(function() {

//   $("#new-card-form").on("submit", function (event) {
//     event.preventDefault();
//     const newCard = {
//       category: $("#cardCategory").val(),
//       publisher: $("#cardManufacturer").val(),
//       title: $("#cardPlayer").val(),
//       issue: $("#cardYear").val(),
//       quality: $("#cardQuality").val()
//     };
//     console.log(newCard),
//     $.ajax({
//       url: "/api/collections/cards",
//       method: "POST",
//       data: {
//         category: $("#cardCategory").val(),
//         publisher: $("#cardManufacturer").val(),
//         title: $("#cardPlayer").val(),
//         issue: $("#cardYear").val(),
//         quality: $("#cardQuality").val(),
//       }
//     }).done(function (response) {
//       console.log(response);
//       if (response.success) {
//         $("#cardCategory").val(""),
//         $("#cardManufacturer").val(""),
//         $("#cardPlayer").val(""),
//         $("#cardYear").val(""),
//         $("#cardQuality").val(""),
//         setTimeout(function () {
//           window.location.replace("/card");
//         }, 100);
//       }
//     });
//   });
// });