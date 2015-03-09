$(document).ready(function(){

$("#save").click( function () {
 var textareaValue = document.getElementById("area").value;
 localStorage.setItem("list",textareaValue);
});


if(localStorage.getItem("list")){
 var storedValue = localStorage.getItem("list");
    document.getElementById("area").value = storedValue;
}
});