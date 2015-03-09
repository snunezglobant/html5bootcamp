$(document).ready(function(){
  
  var drop = document.getElementById("zone");
  
  drop.addEventListener("dragenter", function(ev){
    ev.preventDefault();},false);
  
  drop.addEventListener("dragover", function(ev){
    ev.preventDefault();},false);
  
  drop.addEventListener("drop", loadFile,false);

  function loadFile(ev){
    ev.preventDefault();
    var files = ev.dataTransfer.files;
    var list ="";
    for (var i=0; i<files.length;i++) {
      list+= "Name: " + files[i].name + " Size: " + files[i].size + "Bytes" + " Type: " + files[i].type + "\n";
    }
    drop.innerHTML=list;
  }
});