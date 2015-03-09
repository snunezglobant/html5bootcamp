

// Check browser support
if (typeof(Storage) != "undefined") {
// Store
localStorage.setItem("lastname", "Bootcamp - Topic 6 (your browser support Web Storage)");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage.";
}







$("#save").click( function () {
  var textareaValue = document.getElementById("area").value;
  localStorage.setItem("list",textareaValue);
});

$("#clear").click( function () {
  localStorage.clear("list");
  location.reload()
});


if(localStorage.getItem("list")){
  var storedValue = localStorage.getItem("list");
  document.getElementById("area").value = storedValue;
}






// Code to drag and drop text ***********


var elem_origin;
var elem_dest;

function start(){

  elem_dest = document.getElementById("box");
  elem_dest.addEventListener("dragenter", function(e) {
    e.preventDefault();
  },false);

  elem_dest.addEventListener("dragover",function(e){
    e.preventDefault();
  },false);

  elem_dest.addEventListener("drop", dropped,false);

}

function dropped(e){
  e.preventDefault();
  var file = e.dataTransfer.files;
  var list="";

  for (var i = file.length - 1; i >= 0; i--) {
    list+="Name : " + file[i].name +  " Size: " + (file[i].size/1024).toFixed(2) + " Type : " + file[i].type + "<br>";
  }

  elem_dest.innerHTML=list;
}

window.addEventListener("load",start,false);





/*

// Code to drag and drop images **********


var elem_origin;
var elem_dest;

function start(){
  elem_origin = document.getElementById("imagen");
  elem_origin.addEventListener("dragstart", start_drag,false);

  elem_dest = document.getElementById("box");
  elem_dest.addEventListener("dragenter", function(e) {
    e.preventDefault();
  },false);

  elem_dest.addEventListener("dragover",function(e){
    e.preventDefault();
  },false);

  elem_dest.addEventListener("drop", dropped,false);

  elem_origin.addEventListener("dragend",end,false);
}

function start_drag(e){

  var code="<img src=' " + elem_origin.getAttribute("src") + " ' width=\"200px\">";

  e.dataTransfer.setData("text", code);

}

function dropped(e){
  e.preventDefault();
  elem_dest.innerHTML=e.dataTransfer.getData("text");
}

function end(e){
  var element=e.target;
  element.style.visibility="hidden";
}
window.addEventListener("load",start,false);
*/
