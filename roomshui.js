/* Tooltip*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Image Toggle Design*/

document.getElementById('change-view-icon').onclick = function() {
  if ($(".design-tool").hasClass("top-down")){
    $(".design-tool").removeClass("top-down").addClass("isometric");
  }
  else if ($(".design-tool").hasClass("isometric")){
    $(".design-tool").removeClass("isometric").addClass("top-down");
  }
}

/* Select Template */

document.getElementById('bedroom').onclick = function(){
  $(".design-tool").addClass("top-down");
}

/* Save Room */
document.getElementById('name-room').onclick = function(){
  $("#noSavedRooms").addClass("d-none");
  $("#savedRoom").removeClass("d-none");
  $("#savedRoom").addClass("font-weight-bold");
  $("#login").addClass("d-none");
  $("#edward").removeClass("d-none");
}





