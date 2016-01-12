$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var nameInput = $("input#fullName").val();
    var addressInput = $("input#yourAddress").val();

    $(".fullName").text(nameInput);
    $(".yourAddress").text(addressInput);

    $("#order").show();

    event.preventDefault();
  });

});
