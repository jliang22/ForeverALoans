
//Hides div id
//
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

//Rate shovel
function confirm_alert() {
    alert("Rating Saved!");
}